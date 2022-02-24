// path resolver reexport
const {resolve} = require('path')
module.exports.resolve = resolve

// spawner
module.exports.spawn     = require('cross-spawn').spawn
module.exports.spawnSync = require('cross-spawn').sync
module.exports.fork      = require('child_process').fork

// ES module loader API changes in Node 16
function isLegacy () {
  return Number(process.versions.node.split('.')[0]) < 16
}
if (isLegacy()) {
  // use @ganesha/node-legacy for <16
  module.exports.loader   = require.resolve('@ganesha/node-legacy/loader.mjs'),
  module.exports.warnings = require.resolve('@ganesha/node-legacy/warning.cjs')
} else {
  // use @ganesha/node for 16+
  module.exports.loader   = require.resolve('@ganesha/node'),
  module.exports.warnings = require.resolve('@ganesha/node/warning.cjs')
}

// arguments that need to be passed to Node to use Ganesha
const nodeOptions = module.exports.nodeOptions = [
  // hide the experimental loader warning
  `--require=${module.exports.warnings}`,
  // https://nodejs.org/api/cli.html#--experimental-loadermodule
  `--experimental-loader=${module.exports.loader}`,
  // https://nodejs.org/api/cli.html#--experimental-specifier-resolutionmode
  '--experimental-specifier-resolution=node',
]

function initSupervisor (argv) {

  process.title = 'Ganesha Live Supervisor'

  const watcher = new (require('chokidar')).FSWatcher({
    ignoreInitial: true
  })
  watcher.on('all', (event, path) => {
    bootstrap()
  })

  let proc
  const args = [ ...nodeOptions, ...argv ]
  const opts = {
    env: {
      "Ganesha_Live":    "",
      "Ganesha_Watched": "true",
      "Ganesha_Trace":   process.env["Ganesha_Trace"]
    },
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  }

  bootstrap()
  function bootstrap () {
    if (proc) {
      proc.kill(9)
    }
    const entry = resolve(__dirname, 'ganesha-node')
    proc = module.exports.fork(entry, args, opts)
    proc.on('error', (...args) => {
      console.error('Error when forking:', ...args)
    })
    proc.on('exit', (code, signal) => {
      onExit(code, signal, proc.pid)
      console.debug(`Waiting for change to restart...`)
    })
    proc.on('message', ({"Ganesha_Watch": path}) => {
      if (path) {
        watcher.add(path)
      }
    })
  }

}
module.exports.initSupervisor = initSupervisor

function initShim (argv) {
  process.title = 'Ganesha Live Shim'
  // spawn Node.js with Ganesha loader enabled
  const args = [ ...nodeOptions, ...argv ]
  const opts = { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] }
  const proc = module.exports.spawn(process.execPath, args, opts)
  proc.on('message', message => {
    process.send(message)
  })
  proc.on('exit', (code, signal) => {
    onExit(code, signal, proc.pid)
    process.exit()
  })
  //process.exit(proc.status)
}
module.exports.initShim = initShim

function initStandalone (argv) {
  // spawn Node.js with Ganesha loader enabled
  const args = [ ...nodeOptions, ...argv ]
  const opts = { stdio: 'inherit' }
  const proc = module.exports.spawnSync(process.execPath, args, opts)
  process.exit(proc.status)
}
module.exports.initStandalone = initStandalone

function onExit (code, signal, pid) {
  if (pid) pid = `${pid} `
  if (code) {
    console.debug(`Watched process ${pid}exited with code ${code}.`)
  } else if (signal) {
    console.debug(`Watched process ${pid}terminated by signal ${signal}`)
  }
  if (code === 0) {
    process.exit(0)
  }
}
