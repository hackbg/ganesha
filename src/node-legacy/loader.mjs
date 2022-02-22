if (process.env['Ganesha_Watch']) {
  console.warn('[@ganesha/node-legacy] The Ganesha_Watch setting is currently only implemented in @ganesha/node')
}

import { URL, pathToFileURL, fileURLToPath } from 'url'
import { readFileSync, existsSync } from 'fs'
import { resolve as resolvePath, dirname } from 'path'

import JSONC from 'jsonc-parser'

import { parseString } from '@ganesha/core/parse.cjs'
import { tscToMjs, esbuildToMjs } from '@ganesha/core/transform.cjs'
import { trace } from '@ganesha/core/trace.cjs'

import { installSourceMapSupport, addSourceMap } from './sourcemaps.cjs'
installSourceMapSupport()

import { register } from './loader.cjs'
register()

import {
  baseURL,
  extensions,
  isPathImport, isDirectory,
  isMarkdown, isLiterate, isLiterateModule,
  isTypescript, isLiterateTypeScript,
  isValidFMType, getFMType,
  isWindows,
  getNotFoundPackage,
  parseNodeModuleImport
} from './util.mjs'

const warnedBrokenPackages = [
]

/// ## Resolve module URL
/// https://nodejs.org/api/esm.html#esm_resolve_specifier_context_defaultresolve
export function resolve (specifier, context = {}, defaultResolve) {

  // Wrap `defaultResolve` to make a class of error messages less confusing.
  const _defaultResolve = defaultResolve
  defaultResolve = function helpfulDefaultResolve (...args) {
    try {
      return _defaultResolve(...args)
    } catch (e) {
      if (e.code === 'ERR_MODULE_NOT_FOUND') {
        const notFoundPackage = getNotFoundPackage(e.message)
        if (notFoundPackage && existsSync(notFoundPackage)) {
          e.notFoundPackage = notFoundPackage
          if (!warnedBrokenPackages.includes(notFoundPackage)) {
            console.warn(
              `The default module resolver failed to find ${notFoundPackage}, ` +
              `but the directory exists. This usually means that the file `     +
              `specified by the "main" key of ${notFoundPackage}package.json ` +
              `does not exist, which is a sign that the package may require a `  +
              `build step.\n`
            )
            warnedBrokenPackages.push(notFoundPackage)
          }
        }
      }
      throw e
    }
  }

  /// Determine parent URL (URL of importing module).
  /// Make sure there's a trailing slash, otherwise
  /// relative imports would be resolved to the wrong dir.
  let { parentURL = baseURL } = context

  const traceResolve = (...args) =>
    trace(`[resolve] ${parentURL} -> ${specifier} ::\n         `, ...args)

  /// Rethrow syntax errors
  if (parentURL.startsWith('SyntaxError')) {
    throw new SyntaxError(parentURL.slice(13))
  }

  traceResolve("Let's go")

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
    traceResolve('Identified literate module (by extension)')
    /// Literate modules can be identified by their extension
    literate = true

  } else if (isMarkdown(specifier) && isValidFMType(getFMType(path))) {
    traceResolve('Identified literate module (by front matter)')
    /// Or, they can be stored in regular Markdown files
    /// and identified as literate by their front matter.
    literate = true

  } else if (isPathImport(specifier)) {
    traceResolve('resolving path import')

    const url2 = new URL(specifier, parentURL).href
    const path = fileURLToPath(url2)

    if (existsSync(path) && !isDirectory(path)) {
      /// Try the verbatim module name but not if it's a directory
      traceResolve('File exists')
      url = url2

    } else {
      /// Try the module name with different extensions
      traceResolve('trying extensions: ' + extensions.join(' '))

      let found = false
      for (const extension of extensions) {
        const urlPlusExtension = new URL(specifier + extension, parentURL).href
        traceResolve('trying', extension, ':', urlPlusExtension)
        if (existsSync(fileURLToPath(urlPlusExtension))) {
          traceResolve('found', urlPlusExtension)
          url = urlPlusExtension
          found = true
          break
        }
      }

      if (!found && existsSync(path)) {
        /// Try the directory last
        traceResolve('resolved directory')
        url = url2
      }
    }

  } else if (existsSync(tsconfigPath)) {

    /// Honor TypeScript path overrides
    traceResolve('Checking tsconfig at', tsconfigPath)
    let tsconfig
    try {
      tsconfig = JSONC.parse(readFileSync(tsconfigPath, 'utf8'))
    } catch (e) {
      throw new Error(`Ganesha: failed to parse TS config at ${tsconfigPath}: ${e.message}`)
    }
    const { compilerOptions: { paths = {} } = {} } = tsconfig
    let found = false
    if (paths[specifier]) {
      traceResolve('Trying tsconfig paths')
      for (const path of paths[specifier]) {
        const resolvedPath = resolvePath(dirname(fileURLToPath(parentURL)), path)
        if (existsSync(resolvedPath)) {
          traceResolve('resolved from tsconfig paths')
          url = pathToFileURL(resolvedPath).href
          found = true
          break
        }
      }
    }

    if (!found) {
      traceResolve('No path override found.')
      resolveDefault()
    }

  } else {
    resolveDefault()
  }

  function resolveDefault () {
    traceResolve('Using defaultResolve')
    const { module, path } = parseNodeModuleImport(specifier)
    if (module) {
      let base
      try {
        base = dirname(fileURLToPath(resolve(module, context, defaultResolve).url))
      } catch (e) {
        if (e.notFoundPackage) {
          base = e.notFoundPackage
        } else {
          throw e
        }
      }
      url = pathToFileURL(resolvePath(base, path)).href
    } else {
      url = defaultResolve(specifier, context, defaultResolve).url
    }
    if (url.startsWith('file:///')) {
      const fsPath = fileURLToPath(url)
      if (!existsSync(fsPath)) {
        url = tryPathExtensions(fsPath)
      }
    }
  }

  function tryPathExtensions (path) {
    for (const extension of extensions) {
      const pathPlusExtension = `${path}${extension}`
      traceResolve('trying', extension, ':', pathPlusExtension)
      if (existsSync(pathPlusExtension)) {
        traceResolve('found', pathPlusExtension)
        return pathToFileURL(pathPlusExtension).href
      }
    }
    throw new Error(
      `@ganesha/node: Could not resolve ${path} with any of the `+
      `following extensions: ${extensions.join(' ')}`
    )
  }


  const result = { url, literate }

  traceResolve('Final result:', JSON.stringify(result))
  let fsPath = null
  try {
    fsPath = fileURLToPath(result.url)
  } catch (_) {
    // If the result URL is not a file URL,
    // don't check if such a file exists duh
  } finally {
    if (fsPath && !existsSync(fsPath)) {
      throw Object.assign(new Error(`
        Import specifier '${specifier}' in '${parentURL}' resolved to nonexistent path '${fsPath}'
      `.trim()), {
        specifier,
        parentURL,
        fsPath
      })
    }
  }

  return result

}

/// ## Interpret module URL
/// https://nodejs.org/api/esm.html#esm_getformat_url_context_defaultgetformat
export function getFormat (url, context, defaultGetFormat) {
  trace('[getFormat]', url, context)

  if (!url.startsWith('node:')) {
    const path = fileURLToPath(url)

    if (isLiterateModule(url)) {
      trace('[getFormat] LiterateModule', url, context)
      return { format: 'module' }
    }

    if (isLiterate(url)) {
      trace('[getFormat] Literate', url, context)
      return { format: 'commonjs' }
    }

    if (url.startsWith('file://')) {
      trace('[getFormat] File', url, context)
      if (isMarkdown(url)) {
        trace('[getFormat] Markdown', url, context)
        const fmType = getFMType(path)
        trace('[getFormat] Front matter', fmType)
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
      let lastBasePath = null
      let basePath = path
      do {
        const packageJSONPath = resolvePath(basePath, 'package.json')
        if (existsSync(packageJSONPath)) {
          const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
          if (packageJSON.type === 'module') {
            return { format: 'module' }
          } else {
            return { format: 'commonjs' }
          }
        } else {
          // Ascend up the directory tree until a package.json is found
          lastBasePath = basePath
          basePath = dirname(basePath)
        }
      } while (lastBasePath !== basePath)
    }
  }

  // Let Node.js handle all other URLs.
  try {
    return defaultGetFormat(url, context, defaultGetFormat)
  } catch (e) {
    throw(e)
  }
}

/// ## Load module source
/// https://nodejs.org/api/esm.html#esm_getsource_url_context_defaultgetsource
export function getSource (url, context, defaultGetSource) {
  trace('[getSource]', url, context)

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

  /// Transpile TypeScript
  if (isLiterateTypeScript(context.url)) {
    trace('[transformSource] [Literate TS]', context.format, context.url)
    return { source: transformTypeScript(parseString(src.toString()), context) }
  }
  if (isTypescript(context.url)) {
    trace('[transformSource] [TS]', context.format, context.url)
    return { source: transformTypeScript(src.toString(), context) }
  }

  /// Convert Markdown with embedded code blocks
  /// to code with embedded Markdown comments
  if (isMarkdown(context.url)) {
    trace('[transformSource] [MD]', context.format, context.url)
    return { source: parseString(src.toString()) }
  }

  /// Let Node.js handle all other sources.
  return defaultTransformSource(src, context, defaultTransformSource)
}

export function transformTypeScript (source, context) {
  trace('[transformTS]', context.url)
  const { url, format } = context
  const { id, compiled, map } = tscToMjs(isWindows ? url : fileURLToPath(url), source, format)
  addSourceMap(id, map, 'commonjs')
  return compiled
  //return esbuildToMjs(isWindows ? url : fileURLToPath(url), source, format)
}
