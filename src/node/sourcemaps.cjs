const sourceMapSupport = require('source-map-support')
    , sourceMaps = {}

let sourceMapSupportInstalled = false

module.exports.installSourceMapSupport = function installSourceMapSupport () {

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

module.exports.addSourceMap = function (filename, sourceMap, loader) {
  if (process.env.LITERATE_DEBUG) console.debug(`[addSourceMap] [${loader}] ${filename}`)
  sourceMaps[filename] = sourceMap
}
