import { basename, extname, dirname, resolve as resolvePath, relative } from 'path'
import { readFileSync, existsSync, statSync, realpathSync } from 'fs'
import { stat, realpath } from 'fs/promises'
import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'

import { _trace, parseString, tscToMjs, esbuildToMjs, settings } from '@ganesha/core'

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
  ERR
} from './ganesha-node-constants'

const warnedBrokenPackages = []
const sourceMaps = {}
let sourceMapSupportInstalled = false
installSourceMapSupport()

export {
  ganeshaResolve as resolve,
  ganeshaLoad    as load
}

/** TODO: resolve module sub-imports like '@foo/bar/index.ts' */
async function ganeshaResolve (url, context, defaultResolve) {
  const trace = (...args) => _trace('RSLV', url, ...args)
  const { conditions, importAssertions, parentURL } = context
  defaultResolve = makeResolverHelpful(defaultResolve)
  let result = { url: undefined, format: undefined }

  if (url.startsWith(PREFIXES.FILE_URL) || url.startsWith(PREFIXES.RELATIVE_PATH)) {
    await resolvePathImport()
  } else {
    await resolveDefaultImport()
  }

  if (!result.url) {
    throw ERR.E01(parentUrl, url)
  }

  if (!result.format) {
    trace(`[resolve] no format determined for: ${result.url}`)
    if (result.url && result.url.startsWith('file://')) {
      result.format = determineModuleFormat(fileURLToPath(result.url))
    }
  }

  trace(`[resolve] [from ${parentURL}] import '${url}' = ${result.url} (${result.format})`)
  return result

  async function resolveDefaultImport () {
    trace(`[resolve default] ${url}`)
    result = await defaultResolve(url, context, defaultResolve)
    if (result.url.startsWith(PREFIXES.FILE_URL)) {
      result.url = pathToFileURL(await realpath(fileURLToPath(result.url))).href
    }
  }

  async function resolvePathImport () {

    const resolvedURL  = resolveURL(parentURL||'', url)
    const resolvedPath = fileURLToPath(resolvedURL)
    trace(`[resolve path] `, resolvedPath)
    try {
      await resolvePathImportExact()
    } catch (e) {
      if (e.code === 'ENOENT') {
        await resolvePathImportFuzzy()
      } else {
        throw e
      }
    }

    async function resolvePathImportExact () {
      const stats = await stat(resolvedPath)
      if (stats.isFile()) {
        const realPath = await realpath(resolvedPath)
        trace(`[resolve path exact] realPath =`, resolvedPath)
        result.url    = pathToFileURL(realPath).href
        result.format = result.format || determineModuleFormat(resolvedPath)
        trace(`[resolve path exact] found ${result.url}, format: ${result.format}`)
      } else if (stats.isDirectory()) {
        trace(`[resolve path exact] found directory at ${resolvedURL}, using defaultResolve`)
        result = defaultResolve(url, context, defaultResolve)
      } else {
        throw ERR.E02()
      }
    }

    async function resolvePathImportFuzzy () {
      trace(`[resolve path fuzzy] no ${resolvedPath}, trying extensions`)
      const variants = EXTENSION_ORDER.map(extension=>`${resolvedPath}${extension}`)
      let found = false
      const results = await Promise.allSettled(variants.map(tryVariant))
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
        throw ERR.E04(url, parentUrl) 
      }
      const realPath = fulfilled[0].value
      result.url    = pathToFileURL(realPath).href
      result.format = result.format || determineModuleFormat(realPath)

      async function tryVariant (variant) {
        try {
          const realPath = await realpath(variant)
          trace(`[resolve path fuzzy] exists: ${realPath}`)
          return realPath
        } catch (error) {
          if (error.code === 'ENOENT') {
            //trace(`[resolve fuzzy] does not exist: ${variant}`)
            return null
          } else {
            throw [variant, error]
          }
        }
      }
    }
  }

}

// This function wraps the `defaultResolve` callback
// provided by Node to add more helpful error messages.
function makeResolverHelpful (defaultResolve) {
  if (defaultResolve.isHelpful) return defaultResolve
  return Object.assign(function helpfulDefaultResolve (...args) {
    try {
      return defaultResolve(...args)
    } catch (e) {
      if (e.code === 'ERR_MODULE_NOT_FOUND') {
        const notFoundModule = RE.CANNOT_FIND_MODULE.exec(message)[1]
        if (notFoundModule) {
          console.error('[@ganesha/node] Module not found:', notFoundModule)
        }
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
  }, { isHelpful: true })
}

function getNotFoundPackage (message) {
  const matches = RE.CANNOT_FIND_PACKAGE.exec(message)
  if (matches) {
    return matches[1]
  }
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

export async function ganeshaLoad (
  url,
  { format, importAssertions },
  defaultLoad
) {
  const trace = (...args) => _trace('  LOAD', url, ...args)
  trace()

  // Non-file imports (such as built-in modules)
  // are passed to the default loader.
  if (!url.startsWith(PREFIXES.FILE_URL)) {
    return defaultLoad(url, { format, importAssertions }, defaultLoad)
  }

  // Everything else is fair game.
  let source
  let result
  const location = realpathSync(fileURLToPath(url))

  // If live mode is enabled, add this file to the watcher:
  if (process.send) {
    process.send({"Ganesha_Watch": location})
  }

  // Count extensions from the back: `name.ext2.ext1`
  const ext1 = extname(location)
  const ext2 = extname(basename(url, ext1))
  if (EXTENSIONS.MD === ext1) {
    // When loading a Markdown file, extract the code from it:
    source = readFileSync(location, 'utf8')
    const {attributes} = frontMatter(source)
    source = parseString(source)
    if (EXTENSIONS.TS === ext2 || attributes.literate === LITERATE.TYPESCRIPT) {
      // And if the code in the Markdown file is TS, compile it to JS:
      const transformed = tscToMjs(location, source, format)
      const { id, compiled, map } = transformed
      addSourceMap(id, map)
      source = compiled
    }
  } else if (EXTENSIONS.TS === ext1) {
    // When loading a TS file, compile it to JS:
    source = readFileSync(location, 'utf8')
    const transformed = tscToMjs(location, source, format)
    const { id, compiled, map } = transformed
    addSourceMap(id, map)
    source = compiled
  } else {
    if (format) {
      // Imports with known formats are passed to the default loader.
      return await defaultLoad(url, { format, importAssertions }, defaultLoad)
    } else {
      // Imports with other (unknown) formats are handled as data
      format = FORMATS.MODULE
      source = readFileSync(location, 'utf8')
      if (EXTENSIONS.JSON !== ext1) {
        // If it's not JSON the data is quoted as a string
        source = '`' + source + '`'
      }
      source = `export default ${source}`
    }
  }

  return { format, source }
}

export function determineModuleFormat (location) {
  const ext1 = extname(location)
  if (MJS === ext1) return FORMATS.MODULE
  if (CJS === ext1) return FORMATS.COMMONJS
  const ext2 = extname(basename(location, ext1))
  if (MD === ext1) {
    if (MJS === ext2) return FORMATS.MODULE
    if (CJS === ext2) return FORMATS.COMMONJS
    if (ext2) return digForFormat(location)
    const content = readFileSync(location, 'utf8')
    const {attributes} = frontMatter(content)
    if (attributes.literate) {
      if (attributes.literate === LITERATE.COMMONJS) return FORMATS.COMMONJS
      if (attributes.literate === LITERATE.ECMASCRIPT) return FORMATS.MODULE
      return digForFormat(location)
    }
  } else if (TS === ext1 || JS === ext1) {
    return digForFormat(location)
  }
}

export function digForFormat (location) {
  while (location !== dirname(location)) {
    location = dirname(location)
    const packageJsonPath = resolvePath(location, FILES.PACKAGE_JSON)
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, UTF8))
      if (packageJson.type === FORMATS.MODULE) return FORMATS.MODULE
    }
    const tsconfigJsonPath = resolvePath(location, FILES.TSCONFIG_JSON)
    if (existsSync(tsconfigJsonPath)) {
      const tsconfigJson = JSONC.parse(readFileSync(tsconfigJsonPath, UTF8))
      if (tsconfigJson.compilerOptions.target === FORMATS.COMMONJS) return FORMATS.COMMONJS
      return FORMATS.MODULE
    }
  }
  return FORMATS.COMMONJS
}

export function installSourceMapSupport () {
  if (settings.noSourceMap) return
  if (sourceMapSupportInstalled) return
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment:              'node',
    retrieveSourceMap (url) {
      if (url.startsWith('file://')) {
        url = fileURLToPath(url)
      }
      if (sourceMaps[url]) {
        return { url, map: sourceMaps[url], }
      } else {
        return null
      }
    }
  })
  sourceMapSupportInstalled = true
}

export function addSourceMap (filename, sourceMap) {
  const trace = (...args) => _trace('  SMAP', filename, ...args)
  if (!sourceMaps[filename]) {
    trace(`[addSourceMap] ${relative(process.cwd(), filename)}`)
    sourceMaps[filename] = sourceMap
  }
}

let align = 0
export function mkTrace (prefix, ...args1) {
  if (prefix.length > align) align = prefix.length
  prefix = prefix.padEnd(align)
  return (...args2) => _trace(prefix, ...args1, ...args2)
}

// based on https://github.com/nodejs/node/issues/30810
const {emitWarning} = process
process.emitWarning = (warning, ...args) => {
  if (typeof warning === 'string') {
    if (warning.includes('experimental-loader')) return
    if (warning.includes('Node.js specifier resolution in ESM is experimental')) return
  }
  return emitWarning(warning, ...args)
}
