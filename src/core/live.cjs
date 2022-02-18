const { trace } = require('./trace.cjs')

let watcher

if (!!process.env['Ganesha.Live']) {
  console.info('[@hackbg/ganesha] Live mode ON')
  watcher = new (require('chokidar')).FSWatcher()
  watcher.on('all', (event, path, stats) => {
    require('./trace.cjs').trace('[watch]', event, path)
  })
}

module.exports = { watcher }
