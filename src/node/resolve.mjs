import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { existsSync, statSync } from 'fs'

import { extensions } from './util.mjs'
import { determineModuleFormat } from './determineModuleFormat.mjs'

import { trace } from './trace.cjs'

export function resolve (
  url, {
    conditions,
    importAssertions,
    parentURL
  }, defaultResolve
) {
  defaultResolve = makeResolverHelpful(defaultResolve)
  // TODO: resolve module sub-imports like '@foo/bar/index.ts'
  let result = { url: undefined, format: undefined }
  if (url.startsWith('file://') || url.startsWith('.')) {
    const resolvedURL  = resolveURL(parentURL||'', url)
    const resolvedPath = fileURLToPath(resolvedURL)
    if (existsSync(resolvedPath)) {
      const stats = statSync(resolvedPath)
      if (stats.isFile()) {
        result.url    = resolvedURL
        result.format = determineModuleFormat(resolvedPath)
        trace(`[resolve] found ${result.url}, format: ${result.format}`)
      } else if (stats.isDirectory()) {
        trace(`[resolve] found directory at ${resolvedURL}, using defaultResolve`)
        result = defaultResolve(url, { conditions, importAssertions, parentURL }, defaultResolve)
      } else {
        throw new Error('tried to import something that is neither file nor directory')
      }
    } else {
      trace(`[resolve] no ${resolvedPath}`)
      for (const extension of extensions) {
        const properPath = `${resolvedPath}${extension}`
        trace(`[resolve] trying ${properPath}`)
        if (existsSync(properPath)) {
          trace(`[resolve] found ${properPath}`)
          result.url    = pathToFileURL(properPath).href
          result.format = determineModuleFormat(properPath)
          break
        }
      }
    }
  } else {
    result = defaultResolve(url, { conditions, importAssertions, parentURL }, defaultResolve)
  }
  if (!result.format) {
    trace(`[resolve] no format determined for: ${result.url}`)
    if (result.url.startsWith('file://')) {
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
          console.log('[@ganesha/node] Module not found:', notFoundModule)
        }
        const notFoundPackage = getNotFoundPackage(e.message)
        if (notFoundPackage) {
          console.log('[@ganesha/node] Package not found:', notFoundPackage)
          if (existsSync(notFoundPackage)) {
            e.notFoundPackage = notFoundPackage
            warnBrokenPackage(notFoundPackage)
          }
        }
      } else {
        console.log('[@ganesha/node] Loader error:', e)
      }
      throw e
    }
  }, { isHelpful: true })
}

const RE_CANNOT_FIND_MODULE  = /Cannot find module '(.+)'/
function getNotFoundModule (message) {
  const reNotFoundMatches = RE_CANNOT_FIND_MODULE.exec(message)
  if (reNotFoundMatches) {
    return reNotFoundMatches[1]
  }
}

const RE_CANNOT_FIND_PACKAGE = /Cannot find package '(.+)'/
function getNotFoundPackage (message) {
  const reNotFoundMatches = RE_CANNOT_FIND_MODULE.exec(message)
  if (reNotFoundMatches) {
    return reNotFoundMatches[1]
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
      `does not exist, which is a sign that the package may require a `  +
      `build step.\n`
    )
    warnedBrokenPackages.push(notFoundPackage)
  }
}
