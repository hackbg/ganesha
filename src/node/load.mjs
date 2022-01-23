import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { basename, extname, dirname, resolve as resolvePath } from 'path'
import { readFileSync, existsSync } from 'fs'
import frontMatter from 'front-matter'

import { parseString } from '@ganesha/core/parse.cjs'
import { tscToMjs, esbuildToMjs } from '@ganesha/core/transform.cjs'

import { determineModuleFormat } from './determineModuleFormat.mjs'

let sourceMapSupportInstalled = false
installSourceMapSupport()

import { trace } from './trace.cjs'

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

import sourceMapSupport from 'source-map-support'
const  sourceMaps = {}

export function installSourceMapSupport () {
  if (sourceMapSupportInstalled) return
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment:              'node',
    retrieveSourceMap (url) {
      if (sourceMaps[url]) {
        return { url, map: sourceMaps[url], }
      } else {
        return null
      }
    }
  })
  sourceMapSupportInstalled = true
}

export function addSourceMap (filename, sourceMap, loader) {
  if (process.env.LITERATE_DEBUG) console.debug(`[addSourceMap] [${loader}] ${filename}`)
  sourceMaps[filename] = sourceMap
}
