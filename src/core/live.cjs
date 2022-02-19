const { trace } = require('./trace.cjs')

let watcher

Error.stackTraceLimit = 1000
if (!!process.env['Ganesha.Live'] && !watcher) {
  console.trace('[@hackbg/ganesha] Live mode ON', process.argv)
  watcher = new (require('chokidar')).FSWatcher()
  watcher.on('all', (event, path, stats) => {
    require('./trace.cjs').trace('[watch]', event, path)
  })
}

module.exports = { watcher }
