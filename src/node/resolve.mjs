import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { existsSync } from 'fs'
import { stat, realpath } from 'fs/promises'

import { trace } from '@ganesha/core/trace.cjs'

import { extensions } from './util.mjs'
import { determineModuleFormat } from './determineModuleFormat.mjs'

export async function resolve (
  url, {
    conditions,
    importAssertions,
    parentURL
  }, defaultResolve
) {
  defaultResolve = makeResolverHelpful(defaultResolve)

  // TODO: resolve module sub-imports like '@foo/bar/index.ts'
  let result = { url: undefined, format: undefined }

  // Only process file imports
  if (url.startsWith('file://') || url.startsWith('.')) {
    const resolvedURL  = resolveURL(parentURL||'', url)
    const resolvedPath = fileURLToPath(resolvedURL)
    trace(`[resolve] resolvedPath =`, resolvedPath)
    try {
      const stats = await stat(resolvedPath)
      if (stats.isFile()) {
        const realPath = await realpath(resolvedPath)
        trace(`[resolved] realPath =`, resolvedPath)
        result.url    = pathToFileURL(realPath).href
        result.format = determineModuleFormat(resolvedPath)
        trace(`[resolved] found ${result.url}, format: ${result.format}`)
      } else if (stats.isDirectory()) {
        trace(`[resolved] found directory at ${resolvedURL}, using defaultResolve`)
        result = defaultResolve(url, { conditions, importAssertions, parentURL }, defaultResolve)
      } else {
        throw new Error('tried to import something that is neither file nor directory')
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        trace(`[resolve] no ${resolvedPath}, trying extensions`)
        const variants = extensions.map(extension=>`${resolvedPath}${extension}`)
        let found = false
        const results = await Promise.allSettled(variants.map(async variant=>{
          try {
            const realPath = await realpath(variant)
            trace(`[resolve] exists: ${realPath}`)
            return realPath
          } catch (error) {
            if (error.code === 'ENOENT') {
              trace(`[resolve] does not exist: ${variant}`)
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
          throw new Error(
            `[@ganesha/node] Ambiguous import "${resolvedPath}"\n`
            + `Could be one of the following:\n`
            + fulfilled.map(x=>x.value).join('\n')
          )
        }
        if (fulfilled.length < 1) {
          throw new Error(
            `[@ganesha/node] Failed to resolve import:\n  "${url}" (from ${parentURL})`
            + `\nTried the following paths:\n  `
            + variants.join('\n  ')
          )
        }
        const realPath = fulfilled[0].value
        result.url    = pathToFileURL(realPath).href
        result.format = determineModuleFormat(realPath)
      } else {
        throw e
      }
    }
  } else {
    trace(`[resolved] default: ${url}`)
    result = await defaultResolve(url, { conditions, importAssertions, parentURL }, defaultResolve)
    if (result.url.startsWith('file://')) {
      result.url = pathToFileURL(await realpath(fileURLToPath(result.url))).href
    }
  }

  if (!result.url) {
    throw new Error(`[@ganesha/node]: [from ${parentURL}] resolution failed: import '${url}'`)
  }

  if (!result.format) {
    trace(`[resolve] no format determined for: ${result.url}`)
    if (result.url && result.url.startsWith('file://')) {
      result.format = determineModuleFormat(fileURLToPath(result.url))
    }
  }

  trace(`[resolve] [from ${parentURL}] import '${url}' = ${result.url} (${result.format})`)

  return result
}

// This function wraps the `defaultResolve` callback
// provided by Node to add more helpful error messages.
export function makeResolverHelpful (defaultResolve) {
  if (defaultResolve.isHelpful) return defaultResolve
  return Object.assign(function helpfulDefaultResolve (...args) {
    try {
      return defaultResolve(...args)
    } catch (e) {
      if (e.code === 'ERR_MODULE_NOT_FOUND') {
        const notFoundModule = getNotFoundModule(e.message)
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

const RE_CANNOT_FIND_MODULE  = /Cannot find module '(.+)'/
function getNotFoundModule (message) {
  const matches = RE_CANNOT_FIND_MODULE.exec(message)
  if (matches) {
    return matches[1]
  }
}

const RE_CANNOT_FIND_PACKAGE = /Cannot find package '(.+)'/
function getNotFoundPackage (message) {
  const matches = RE_CANNOT_FIND_MODULE.exec(message)
  if (matches) {
    return matches[1]
  }
}

const warnedBrokenPackages = []

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
