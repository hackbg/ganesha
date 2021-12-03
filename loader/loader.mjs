import { URL, pathToFileURL, fileURLToPath } from 'url'
import { readFileSync, existsSync, statSync } from 'fs'
import { resolve as resolvePath, dirname, sep as PATH_SEP } from 'path'
import { transformSync } from 'esbuild'
import { parseString } from './parse.cjs'
import frontMatter from 'front-matter'

import {
  sourceMaps,
  installSourceMapSupport,
  trace,
  is
} from './shared.cjs'

installSourceMapSupport()

const baseURL   = pathToFileURL(`${process.cwd()}/`).href

const FM_TYPES  = ['commonjs', 'ecmascript', 'typescript']
    , getFMType = path => frontMatter(readFileSync(path, 'utf8')).attributes.literate

const extensions = ['.ts', '.mjs', '.js', '.cjs']

/// ## Resolve module URL
/// https://nodejs.org/api/esm.html#esm_resolve_specifier_context_defaultresolve

export function resolve (
  specifier,
  context = { parentURL: undefined },
  defaultResolve
) {

  /// Determine parent URL (URL of importing module).
  /// Make sure there's a trailing slash, otherwise
  /// relative imports would be resolved to the wrong dir.

  let { parentURL = baseURL } = context

  if (parentURL.startsWith('SyntaxError')) {
    throw new SyntaxError(parentURL.slice(13))
  }

  trace('1.resolve', specifier, is.Literate(specifier), is.Markdown(specifier), 'FROM', parentURL)
  if (is.Directory(fileURLToPath(parentURL)) && !parentURL.endsWith('/')) {
    parentURL = `${parentURL}/`
  }

  let url = new URL(specifier, parentURL).href
  if (url.startsWith('node:')) {
    return { format: 'builtin', url }
  }

  let path = fileURLToPath(url)

  /// Literate modules can be identified by their extension:

  if (is.Literate(specifier)) {
    return { url }
  }

  /// Or, they can be stored in regular Markdown files
  /// and identified as literate by their front matter.

  if (is.Markdown(specifier) && FM_TYPES.includes(getFMType(path))) {
    return { url }
  }

  if (is.PathImport(specifier)) {
    const url = new URL(specifier, parentURL).href
    const path = fileURLToPath(url)

    /// Try the verbatim module name but not if it's a directory
    if (existsSync(path) && !is.Directory(path)) {
      return { url }
    }

    /// Try the module name with different extensions
    for (const extension of extensions) {
      const url = new URL(specifier + extension, parentURL).href
      trace('trying', url)
      if (existsSync(fileURLToPath(url))) {
        return { url }
      }
    }

    /// Try the directory
    if (existsSync(path)) {
      return { url }
    }

  } else {

    // Honor TypeScript path overrides
    const tsconfigPath = resolvePath(dirname(fileURLToPath(parentURL)), 'tsconfig.json')
    if (existsSync(tsconfigPath)) {
      const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'))
      const { compilerOptions: { paths = {} } = {} } = tsconfig
      if (paths[specifier]) {
        for (const path of paths[specifier]) {
          const resolvedPath = resolvePath(dirname(fileURLToPath(parentURL)), path)
          if (existsSync(resolvedPath)) {
            return { url: pathToFileURL(resolvedPath).href }
          }
        }
      }
    }

  }

  /// Support importing module from its documentation
  const selfImport = supportSelfImport(parentURL, specifier)
  if (selfImport) {
    return { url: selfImport }
  }

  /// Let Node.js handle all other cases.
  return defaultResolve(specifier, context, defaultResolve)
}

function supportSelfImport (parentURL, specifier) {
  const segments = fileURLToPath(parentURL).split(PATH_SEP)
  if (segments[0] === '') segments[0] = '/'
  do {
    const packageJson = resolvePath(...segments, 'package.json')
    if (existsSync(packageJson)) {
      const {name, main = "index.js"} = JSON.parse(readFileSync(packageJson, 'utf8'))
      if (name === specifier) {
        segments.push(main)
        return pathToFileURL(segments.join(PATH_SEP)).href
      }
    }
  } while (segments.pop())
}

/// ## Interpret module URL
/// https://nodejs.org/api/esm.html#esm_getformat_url_context_defaultgetformat

export function getFormat (url, context, defaultGetFormat) {
  trace('2.getFormat', url, context)

  if (!url.startsWith('node:')) {

    const path = fileURLToPath(url)

    if (is.LiterateModule(url)) {
      return { format: 'module' }
    }

    if (is.Literate(url)) {
      return { format: 'commonjs' }
    }

    if (url.startsWith('file://')) {
      if (is.Markdown(url)) {
        const fmType = getFMType(path)
        if (FM_TYPES.includes(fmType)) {
          if (fmType === 'commonjs') {
            return { format: 'commonjs' }
          } else {
            return { format: 'module' }
          }
        }
      }
    }

    if (is.Typescript(url)) {
      return { format: 'module' }
    }

    if (is.Directory(path)) {
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
  if (is.Directory(path)) {
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

  if (is.LiterateTypeScript(context.url)) {
    return { source: transformTypeScript(parseString(src.toString()), context) }
  }

  if (is.Typescript(context.url)) {
    return { source: transformTypeScript(src.toString(), context) }
  }

  /// Convert Markdown with embedded code blocks
  /// to code with embedded Markdown comments

  if (is.Markdown(context.url)) {
    return { source: parseString(src.toString()) }
  }

  // Let Node.js handle all other sources.

  return defaultTransformSource(src, context, defaultTransformSource)
}

export function transformTypeScript (source, context) {

  trace('5.transformTS', context.url)

  const { url, format } = context

  const { code, warnings, map: sourceMap } = transformSync(
    source, {
      sourcefile: is.Windows ? url : fileURLToPath(url),
      sourcemap: 'both',
      loader: 'ts',
      target: 'esnext',
      format: format === 'module' ? 'esm' : 'cjs'
    })

  sourceMaps[url] = sourceMap

  /// Print TypeScript errors

  if (warnings && warnings.length > 0) {
    for (const warning of warnings) {
      console.log(warning.location)
      console.log(warning.text)
    }
  }

  return code
}
