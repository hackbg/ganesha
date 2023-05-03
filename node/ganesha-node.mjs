import { basename, extname, dirname, resolve as resolvePath, relative } from 'path'
import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { stat, realpath, readFile } from 'fs/promises'
import { existsSync } from 'fs'

import { trace as _trace, parseString, settings } from '@ganesha/core'
import { tscToMjs, esbuildToMjs } from '@ganesha/ts'

import JSONC from 'jsonc-parser'
import frontMatter from 'front-matter'
import sourceMapSupport from 'source-map-support'

import {
  PREFIXES,
  EXTENSIONS,
  EXTENSION_ORDER,
  FORMATS,
  LITERATE,
  FILES,
  RE,
  ERR,
  UTF8
} from './ganesha-node-constants.mjs'

export class Ganesha {

  sourceMaps = {}

  constructor () {
    if (!settings.noSourceMap) sourceMapSupport.install({
      environment: 'node',
      handleUncaughtExceptions: false,
      retrieveSourceMap: (url) => {
        if (url.startsWith('file://')) {
          url = fileURLToPath(url)
        }
        if (this.sourceMaps[url]) {
          return { url, map: this.sourceMaps[url], }
        } else {
          return null
        }
      }
    })
  }

  addSourceMap (filename, sourceMap) {
    const trace = (...args) => _trace('addSourceMap', filename, ...args)
    if (!this.sourceMaps[filename]) {
      trace(`[addSourceMap] ${relative(process.cwd(), filename)}`)
      this.sourceMaps[filename] = sourceMap
    }
  }

  /** Resolve TypeScript and Literate modules as importable. */
  resolve = async (url, context, defaultResolve) => {
    const trace = (...args) => _trace('resolve', url, ...args)
    defaultResolve = makeResolverHelpful(defaultResolve)

    // Populate the result object.
    let result
    if (url.startsWith(PREFIXES.FILE_URL) || url.startsWith(PREFIXES.RELATIVE_PATH)) {
      result = await this.resolvePath(url, context, defaultResolve)
    } else {
      result = await this.resolvePackage(url, context, defaultResolve)
    }

    // If the result object still has no URL, resolution failed.
    if (!result.url) {
      throw ERR.E01(context.parentURL, url)
    }

    // If the result object has no format, try to determine the format.
    if (!result.format) {
      trace(`[resolve] no format determined for: ${result.url}`)
      if (result.url && result.url.startsWith('file://')) {
        result.format = await determineModuleFormat(fileURLToPath(result.url))
      }
    }

    // Return the resolution result.
    trace(`[resolve] [from ${context.parentURL}] import '${url}' = ${result.url} (${result.format})`)
    result.shortCircuit = true
    return result
  }

  /** Find the filesystem path corresponding to an import statement. */
  async resolvePath (url, context, defaultResolve) {
    const trace = (...args) => _trace('resolvePath', url, ...args)
    const resolvedPath = fileURLToPath(resolveURL(context.parentURL||'', url))
    trace(resolvedPath)
    return (
      // Try an exact match
      await this.resolvePathExact(url, context, defaultResolve) ||
      // If there is no exact match, try adding different extensions.
      await this.resolvePathFuzzy(url, context, defaultResolve)
    )
  }

  /** Try to to find a filesystem path that exactly matches an import statement,
    * i.e. when an extension is present. */
  async resolvePathExact (url, context, defaultResolve) {
    const trace = (...args) => _trace('resolvePathExact', context.parentURL, '->', url, ...args)
    let result = { url: undefined, format: undefined }
    // Convert URL to filesystem path
    const resolvedPath = fileURLToPath(resolveURL(context.parentURL||'', url))
    // Get info about the file at the specified path
    let stats
    try {
      stats = await stat(resolvedPath)
    } catch (e) {
      if (e.code === 'ENOENT') {
        // If it doesnt exist, return false so caller knows to try different extensions next
        return false
      } else {
        // All other errors are unexpected and should be rethrown
        throw e
      }
    }
    if (stats.isFile()) {
      const realPath = await realpath(resolvedPath)
      trace(`realPath =`, resolvedPath)
      result.url    = pathToFileURL(realPath).href
      result.format = result.format || await determineModuleFormat(resolvedPath)
      trace(`${result.url} is file, format: ${result.format}`)
    } else if (stats.isDirectory()) {
      trace(`${resolvedPath} is dir, using defaultResolve`)
      result = defaultResolve(url, context, defaultResolve)
    } else {
      throw ERR.E02()
    }
    return result
  }

  /** Try to find filesystem path matching import statement without extension.
    * Tries all known extensions in parallel. */
  async resolvePathFuzzy (url, context, defaultResolve) {
    const trace = (...args) => _trace('resolvePathFuzzy', url, ...args)
    let result = { url: undefined, format: undefined }
    const resolvedPath = fileURLToPath(resolveURL(context.parentURL||'', url))
    trace(`no ${resolvedPath}, trying extensions`)
    const variants = EXTENSION_ORDER.map(extension=>`${resolvedPath}${extension}`)
    let found = false
    const results = await Promise.allSettled(variants.map(async function tryVariant (variant) {
      try {
        const realPath = await realpath(variant)
        trace(`exists: ${realPath}`)
        return realPath
      } catch (error) {
        if (error.code === 'ENOENT') {
          //trace(`[resolve fuzzy] does not exist: ${variant}`)
          return null
        } else {
          throw [variant, error]
        }
      }
    }))
    const rejected = results.filter(x=>x.status==='rejected').map(x=>x.reason)
    for (const [variant, error] of rejected) {
      console.warn(
        `[@ganesha/node] Trying import "${variant}" failed with error: ${error.message}`
      )
    }
    const fulfilled = results.filter(x=>x.status==='fulfilled'&&x.value!==null)
    if (fulfilled.length > 1) {
      throw ERR.E03(resolvedPath, fulfilled)
    }
    if (fulfilled.length < 1) {
      throw ERR.E04(url, context.parentURL, variants)
    }
    const realPath = fulfilled[0].value
    result.url    = pathToFileURL(realPath).href
    result.format = result.format || await determineModuleFormat(realPath)
    return result
  }

  async resolvePackage (url, context, defaultResolve) {
    const trace = (...args) => _trace('resolvePackage', url, ...args)
    trace(`${url}`)
    const result = await defaultResolve(url, context, defaultResolve)
    if (result.url.startsWith(PREFIXES.FILE_URL)) {
      result.url = pathToFileURL(await realpath(fileURLToPath(result.url))).href
    }
    return result
  }

  load = async (url, { format, importAssertions }, defaultLoad) => {
    const trace = (...args) => _trace('load', url, ...args)
    trace()
    // At this point all file imports should be converted to file URLs.
    // Non-file imports (such as built-in modules) are passed to the default loader.
    if (!url.startsWith(PREFIXES.FILE_URL)) {
      return defaultLoad(url, { format, importAssertions }, defaultLoad)
    }
    const location = await realpath(fileURLToPath(url))
    // If live mode is enabled, add this file to the watcher:
    if (process.send) process.send({"Ganesha_Watch": location})
    // Extensions are counted from the back: `name.ext2.ext1`
    const ext1 = extname(location)
    const ext2 = extname(basename(url, ext1))
    let result = {}
    if (ext1 === EXTENSIONS.MD) {
      // Files ending in .md are loaded as literate modules.
      result = await this.loadMarkdown(location, format, ext2)
    } else if (ext1 === EXTENSIONS.TS) {
      // Files ending in .ts are loaded as TypeScript modules.
      result = await this.loadTypeScript(location, format)
    } else if (format) {
      // Imports with known formats are passed to the default loader.
      result = await defaultLoad(url, { format, importAssertions }, defaultLoad)
    } else {
      // Imports with unspecified formats are loaded as data modules.
      result = await this.loadData(location, ext1)
    }
    result.shortCircuit = true
    return result
  }

  async loadMarkdown (location, format, ext2) {
    const trace = (...args) => _trace('loadMarkdown', location, ...args)
    trace()
    // When loading a Markdown file, extract the code from it:
    let source = await readFile(location, 'utf8')
    const {attributes:{literate}={}} = frontMatter(source)
    const {defaultLanguage} = settings
    source = parseString(source)
    trace('checking for TS:', {ext2, literate, defaultLanguage})
    if (
      ext2            === EXTENSIONS.TS       ||
      literate        === LITERATE.TYPESCRIPT ||
      defaultLanguage === 'ts'                ||
      defaultLanguage === 'typescript'
    ) {
      // And if the code in the Markdown file is TS, compile it to JS:
      const transformed = tscToMjs(location, source, format)
      const { id, compiled, map } = transformed
      this.addSourceMap(id, map)
      source = compiled
    }
    return { source, format: FORMATS.MODULE }
  }

  async loadTypeScript (location, format) {
    // When loading a TS file, compile it to JS:
    let source = await readFile(location, 'utf8')
    const transformed = tscToMjs(location, source, format)
    const { id, compiled, map } = transformed
    this.addSourceMap(id, map)
    source = compiled
    return { source, format }
  }

  async loadData (location, ext1) {
    // Imports with other (unknown) formats are handled as data
    let source = await readFile(location, 'utf8')
    if (EXTENSIONS.JSON !== ext1) {
      // If it's not JSON the data is quoted as a string
      source = '`' + source + '`'
    }
    source = `export default ${source}`
    return { source, format: FORMATS.MODULE }
  }

}

const loader = new Ganesha()
export default loader
export const resolve = loader.resolve
export const load    = loader.load

export async function determineModuleFormat (location) {
  const ext1 = extname(location)
  if (EXTENSIONS.MJS === ext1) return FORMATS.MODULE
  if (EXTENSIONS.CJS === ext1) return FORMATS.COMMONJS
  const ext2 = extname(basename(location, ext1))
  if (EXTENSIONS.MD === ext1) {
    if (EXTENSIONS.MJS === ext2) return FORMATS.MODULE
    if (EXTENSIONS.CJS === ext2) return FORMATS.COMMONJS
    if (ext2) return await digForFormat(location)
    const content = await readFile(location, 'utf8')
    const {attributes} = frontMatter(content)
    if (attributes.literate) {
      if (attributes.literate === LITERATE.COMMONJS) return FORMATS.COMMONJS
      if (attributes.literate === LITERATE.ECMASCRIPT) return FORMATS.MODULE
      return await digForFormat(location)
    }
  } else if (EXTENSIONS.TS === ext1 || EXTENSIONS.JS === ext1) {
    return await digForFormat(location)
  }

  async function digForFormat (location) {
    while (location !== dirname(location)) {
      location = dirname(location)
      const packageJsonPath = resolvePath(location, FILES.PACKAGE_JSON)
      if (existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(await readFile(packageJsonPath, UTF8))
        if (packageJson.type === FORMATS.MODULE) return FORMATS.MODULE
      }
      const tsconfigJsonPath = resolvePath(location, FILES.TSCONFIG_JSON)
      if (existsSync(tsconfigJsonPath)) {
        const tsconfigJson = JSONC.parse(await readFile(tsconfigJsonPath, UTF8))
        if (tsconfigJson?.compilerOptions?.target === FORMATS.COMMONJS) return FORMATS.COMMONJS
        return FORMATS.MODULE
      }
    }
    return FORMATS.COMMONJS
  }
}

/** This function wraps the `defaultResolve` callback
  * provided by Node to add more helpful error messages. */
export function makeResolverHelpful (defaultResolve) {
  // This function needs to be called only once; subsequent calls are no-ops.
  if (defaultResolve.isHelpful) return defaultResolve

  const warnedBrokenPackages = []
  helpfulDefaultResolve.isHelpful = true
  return helpfulDefaultResolve

  async function helpfulDefaultResolve (...args) {
    try {
      return await defaultResolve(...args)
    } catch (e) {
      if (e.code === 'ERR_MODULE_NOT_FOUND') {
        const notFoundModule = getNotFoundModule(e.message)
        if (notFoundModule) console.error('[@ganesha/node] Module not found:', notFoundModule)
        const notFoundPackage = getNotFoundPackage(e.message)
        if (notFoundPackage) {
          console.error('[@ganesha/node] Package not found:', notFoundPackage)
          if (existsSync(notFoundPackage)) {
            e.notFoundPackage = notFoundPackage
            warnBrokenPackage(notFoundPackage)
          }
        }
      } else {
        console.error('[@ganesha/node] Loader error:', e)
      }
      throw e
    }
  }

  function getNotFoundModule (message) {
    const matches = RE.CANNOT_FIND_MODULE.exec(message)
    if (matches) return matches[1]
  }

  function getNotFoundPackage (message) {
    const matches = RE.CANNOT_FIND_PACKAGE.exec(message)
    if (matches) return matches[1]
  }

  // This function warns about packages with missing entrypoints
  // (as defined by the "main" property of their package.json),
  // but only once per package.
  function warnBrokenPackage (notFoundPackage) {
    if (!warnedBrokenPackages.includes(notFoundPackage)) {
      console.warn(
        `The default module resolver failed to find ${notFoundPackage}, ` +
        `but the directory exists. This usually means that the file `     +
        `specified by the "main" key of ${notFoundPackage}package.json ` +
        `does not exist, which is a sign that the package either requires a `  +
        `build step, or is misconfigured.\n`
      )
      warnedBrokenPackages.push(notFoundPackage)
    }
  }
}
