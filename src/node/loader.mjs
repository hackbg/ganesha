import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { basename, extname, dirname, resolve as resolvePath } from 'path'
import { readFileSync, existsSync } from 'fs'
import frontMatter from 'front-matter'
import JSONC from 'jsonc-parser'

import { parseString } from '@ganesha/core/parse.cjs'
import { tscToMjs, esbuildToMjs } from '@ganesha/core/transform.cjs'

import { trace } from './trace.cjs'
import { installSourceMapSupport, addSourceMap } from './sourcemaps.cjs'
installSourceMapSupport()

import { extensions } from './util.mjs'

// | ext1 | ext2 | front matter | format               | parse |
// | ---- | ---- | ------------ | -------------------- | ----- |
// | .md  | .mjs | -            | module               | yes   |
// | .md  | .cjs | -            | commonjs             | yes   |
// | .md  | .ts  | -            | tsconfig/packagejson | yes   |
// | .md  | .js  | -            | tsconfig/packagejson | yes   |
// | .md  | -    | commonjs     | commonjs             | yes   |
// | .md  | -    | ecmascript   | commonjs             | yes   |
// | .md  | -    | typescript   | commonjs             | yes   |
// | .md  | -    | -            | error                | yes   |
// | .ts  | -    | -            | tsconfig/packagejson | no    |
//

export function resolve (
  url, {
    conditions,
    importAssertions,
    parentURL
  }, defaultResolve
) {
  let result = { url: undefined, format: undefined }
  if (url.startsWith('file://') || url.startsWith('.')) {
    const resolvedURL = resolveURL(parentURL||'', url)
    const resolvedPath = fileURLToPath(resolvedURL)
    if (existsSync(resolvedPath)) {
      result.url    = resolvedURL
      result.format = determineModuleFormat(resolvedPath)
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
    defaultResolve = makeHelpful(defaultResolve)
    result = defaultResolve(url, { conditions, importAssertions, parentURL }, defaultResolve)
    if (!result.format) result.format = determineModuleFormat(fileURLToPath(result.url))
  }
  trace(`[resolve] ${parentURL} + ${url} = ${result.url} (${result.format})`)
  return result
}

export function load (
  url, {
    format,
    importAssertions
  }, defaultLoad
) {
  if (!url.startsWith('file://')) {
    return defaultLoad(url, { format, importAssertions } , defaultLoad)
  } else {
    let source
    const location = fileURLToPath(url)
    const ext1 = extname(location)
    const ext2 = extname(basename(url, ext1))
    if ('.md' === ext1) {
      source = readFileSync(location, 'utf8')
      const {attributes} = frontMatter(source)
      source = parseString(source)
      if ('.ts' === ext2 || attributes.literate === 'typescript') {
        const { id, compiled, map } = tscToMjs(location, source, format)
        addSourceMap(id, map)
        return { format, source: compiled }
      }
      return { format, source }
    } else if ('.ts' === ext1) {
      source = readFileSync(location, 'utf8')
      const { id, compiled, map } = tscToMjs(location, source, format)
      addSourceMap(id, map)
      return { format, source: compiled }
    } else {
      return defaultLoad(url, { format, importAssertions } , defaultLoad)
    }
  }
}

export function determineModuleFormat (location) {
  const ext1 = extname(location)
  const ext2 = extname(basename(location, ext1))
  if ('.md' === ext1) {
    if ('.mjs' === ext2) {
      return 'module'
    } else if ('.cjs' === ext2) {
      return 'commonjs'
    } else if (ext2) {
      return digForFormat(location)
    } else {
      const content = readFileSync(location, 'utf8')
      const {attributes} = frontMatter(content)
      if (attributes.literate) {
        if (attributes.literate === 'commonjs') {
          return 'commonjs'
        } else if (attributes.literate === 'ecmascript') {
          return 'module'
          return { format: 'module', url }
        } else {
          return digForFormat(location)
        }
      }
    }
  } else if ('.ts' === ext1) {
    return digForFormat(location)
  }
}

export function digForFormat (location) {
  while (location !== dirname(location)) {
    location = dirname(location)
    const packageJsonPath = resolvePath(location, 'package.json')
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
      if (packageJson.type === 'module') {
        return 'module'
      }
    }
    const tsconfigJsonPath = resolvePath(location, 'tsconfig.json')
    if (existsSync(tsconfigJsonPath)) {
      const tsconfigJson = JSONC.parse(readFileSync(tsconfigJsonPath, 'utf8'))
      if (tsconfigJson.compilerOptions.target === 'commonjs') {
        return 'commonjs'
      } else {
        return 'module'
      }
    }
  }
  return 'commonjs'
}

import { getNotFoundPackage } from './util.mjs'
const warnedBrokenPackages = []
function makeHelpful (defaultResolve) {
  if (defaultResolve.isHelpful) {
    return defaultResolve
  }
  function helpfulDefaultResolve (...args) {
    try {
      return defaultResolve(...args)
    } catch (e) {
      if (e.code === 'ERR_MODULE_NOT_FOUND') {
        console.log({message: e.message})
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
  helpfulDefaultResolve.isHelpful = true
  return helpfulDefaultResolve
}
