import { relative } from 'path'
import { fileURLToPath } from 'url'

import { trace as _trace } from '@ganesha/core/trace.cjs'

import sourceMapSupport from 'source-map-support'
const  sourceMaps = {}

let sourceMapSupportInstalled = false

export function installSourceMapSupport () {
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
