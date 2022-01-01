import { URL, pathToFileURL, fileURLToPath } from 'url'
import { readFileSync, existsSync } from 'fs'
import { resolve as resolvePath, dirname } from 'path'

import { parseString } from '@hackbg/ganesha-core'

import { installSourceMapSupport } from './sourcemaps.cjs'
installSourceMapSupport()

import { register } from './loader.cjs'
register()

import { trace } from './trace.cjs'

import {
  baseURL,
  extensions,
  isPathImport, isDirectory,
  isMarkdown, isLiterate, isLiterateModule,
  isTypescript, isLiterateTypeScript,
  isValidFMType, getFMType,
  isWindows,
} from './util.mjs'

import { tscToMjs, esbuildToMjs } from './transform.cjs'

/// ## Resolve module URL
/// https://nodejs.org/api/esm.html#esm_resolve_specifier_context_defaultresolve
export function resolve (specifier, context = {}, defaultResolve) {

  /// Determine parent URL (URL of importing module).
  /// Make sure there's a trailing slash, otherwise
  /// relative imports would be resolved to the wrong dir.
  let { parentURL = baseURL } = context

  /// Rethrow syntax errors
  if (parentURL.startsWith('SyntaxError')) {
    throw new SyntaxError(parentURL.slice(13))
  }

  trace('1.resolve', specifier, isLiterate(specifier), isMarkdown(specifier), 'FROM', parentURL)

  /// Append trailing slash to directory imports
  if (isDirectory(fileURLToPath(parentURL)) && !parentURL.endsWith('/')) {
    parentURL = `${parentURL}/`
  }

  let url      = new URL(specifier, parentURL).href
    , literate = false
    , path     = fileURLToPath(url)

  // cjsPreparseModuleExports
  // in internal/modules/esm/translators.js
  // dispatches on extension

  const tsconfigPath = resolvePath(dirname(fileURLToPath(parentURL)), 'tsconfig.json')

  if (isLiterate(specifier)) {
    /// Literate modules can be identified by their extension
    literate = true

  } else if (isMarkdown(specifier) && isValidFMType(getFMType(path))) {
    /// Or, they can be stored in regular Markdown files
    /// and identified as literate by their front matter.
    literate = true

  } else if (isPathImport(specifier)) {
    const url2 = new URL(specifier, parentURL).href
    const path = fileURLToPath(url2)

    if (existsSync(path) && !isDirectory(path)) {
      /// Try the verbatim module name but not if it's a directory
      trace('resolved verbatim')
      url = url2

    } else {
      /// Try the module name with different extensions
      trace('trying extensions: ' + extensions.join(' '))

      let found = false
      for (const extension of extensions) {
        const urlPlusExtension = new URL(specifier + extension, parentURL).href
        trace('trying', extension, ':', urlPlusExtension)
        if (existsSync(fileURLToPath(urlPlusExtension))) {
          trace('found', urlPlusExtension)
          url = urlPlusExtension
          found = true
          break
        }
      }

      if (!found && existsSync(path)) {
        /// Try the directory last
        trace('resolved directory')
        url = url2
      }
    }

  } else if (existsSync(tsconfigPath)) {
    /// Honor TypeScript path overrides
    trace('trying tsconfig', tsconfigPath)
    const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'))
    const { compilerOptions: { paths = {} } = {} } = tsconfig
    if (paths[specifier]) {
      for (const path of paths[specifier]) {
        const resolvedPath = resolvePath(dirname(fileURLToPath(parentURL)), path)
        if (existsSync(resolvedPath)) {
          url = pathToFileURL(resolvedPath).href
          break
        }
      }
    }

  } else {
    /// Let Node.js handle all other specifiers.
    url = defaultResolve(specifier, context, defaultResolve).url
  }

  return { url }
}

/// ## Interpret module URL
/// https://nodejs.org/api/esm.html#esm_getformat_url_context_defaultgetformat
export function getFormat (url, context, defaultGetFormat) {
  trace('2.getFormat', url, context)

  if (!url.startsWith('node:')) {
    const path = fileURLToPath(url)

    if (isLiterateModule(url)) {
      return { format: 'module' }
    }

    if (isLiterate(url)) {
      return { format: 'commonjs' }
    }

    if (url.startsWith('file://')) {
      if (isMarkdown(url)) {
        const fmType = getFMType(path)
        if (isValidFMType(fmType)) {
          if (fmType === 'commonjs') {
            return { format: 'commonjs' }
          } else {
            return { format: 'module' }
          }
        }
      }
    }

    if (isTypescript(url)) {
      return { format: 'module' }
    }

    if (isDirectory(path)) {
      const packageJSONPath = resolvePath(path, 'package.json')
      if (existsSync(packageJSONPath)) {
        const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
        if (packageJSON.type === 'module') {
          return { format: 'module' }
        } else {
          return { format: 'commonjs' }
        }
      } else {
        throw new Error(`@hackbg/ganesha: unsupported directory import: ${url}`)
      }
    }
  }

  // Let Node.js handle all other URLs.
  return defaultGetFormat(url, context, defaultGetFormat)
}

/// ## Load module source
/// https://nodejs.org/api/esm.html#esm_getsource_url_context_defaultgetsource
export function getSource (url, context, defaultGetSource) {
  trace('3.getSource', url, context)

  const path = fileURLToPath(url)
  if (isDirectory(path)) {
    const packageJSONPath = resolvePath(path, 'package.json')
    if (existsSync(packageJSONPath)) {
      const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
      if (packageJSON.main) {
        url = pathToFileURL(resolvePath(path, packageJSON.main))
      }
    }
  }

  return defaultGetSource(url, context, defaultGetSource)
}

/// ## Extract code from Markdown and optionally transpile TypeScript
/// https://nodejs.org/api/esm.html#esm_transformsource_source_context_defaulttransformsource
export function transformSource (src, context, defaultTransformSource) {
  trace('4.transformSource', context.format, context.url)

  /// Transpile TypeScript
  if (isLiterateTypeScript(context.url)) {
    return { source: transformTypeScript(parseString(src.toString()), context) }
  }
  if (isTypescript(context.url)) {
    return { source: transformTypeScript(src.toString(), context) }
  }

  /// Convert Markdown with embedded code blocks
  /// to code with embedded Markdown comments
  if (isMarkdown(context.url)) {
    return { source: parseString(src.toString()) }
  }

  /// Let Node.js handle all other sources.
  return defaultTransformSource(src, context, defaultTransformSource)
}

export function transformTypeScript (source, context) {
  trace('5.transformTS', context.url)
  const { url, format } = context
  return tscToMjs(isWindows ? url : fileURLToPath(url), source, format)
  //return esbuildToMjs(isWindows ? url : fileURLToPath(url), source, format)
}
