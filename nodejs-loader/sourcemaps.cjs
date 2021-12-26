const sourceMapSupport = require('source-map-support')
let sourceMapSupportInstalled = false
const sourceMaps = {}
module.exports.installSourceMapSupport = function installSourceMapSupport () {
  if (sourceMapSupportInstalled) return
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment: 'node',
    retrieveSourceMap(file) {
      if (sourceMaps[file]) return {
        url: file,
        map: sourceMaps[file],
      }
      return null
    }
  })
  sourceMapSupportInstalled = true
}
module.exports.addSourceMap = function (filename, sourceMap) {
  sourceMaps[filename] = sourceMap
}
