/** Entry point of `ganesha-node` command. Launches Node.js with the appropriate augmentations */
const main = module.exports.main = function main ([node, ganesha, ...argv] = process.argv) {

  // Load settings and debug print function from core
  const { settings, trace } = require('@ganesha/core')
  trace(`[launch] PID ${process.pid} Node ${process.version}: ${JSON.stringify(settings)}`)

  // Remove Ganesha from the command line of the process.
  if (settings.hide) (
    process.argv = [node, ...argv] // remove Ganesha script
  )

  // Launch the process in the appropriate mode as specified by the settings.
  switch (true) {
    case settings.live:
      trace(`[launch] Supervisor process will reload watched process on changes to imported modules`)
      return initSupervisor(argv)
    case settings.watched:
      trace(`[launch] Watched process will notify supervisor of what modules are imported`)
      return initShim(argv)
    default:
      trace(`[launch] Standalone mode, no auto reloading.`)
      return initStandalone(argv)
  }

}

// path resolver reexport
const {resolve} = require('path')
module.exports.resolve = resolve

// spawner
module.exports.spawn     = require('cross-spawn').spawn
module.exports.spawnSync = require('cross-spawn').sync
module.exports.fork      = require('child_process').fork

/** The ES module loader API was changed in Node 16 */
function isLegacy () {
  const [major, minor, patch] = process.versions.node.split('.')
  if (major  <  16) return true
  if (major === 16) return minor < 12
  if (major  >  16) return false
}

if (isLegacy()) {
  // use @ganesha/node-legacy for <16
  module.exports.loader   = require.resolve('@ganesha/node-legacy/loader.mjs')
  module.exports.warnings = require.resolve('@ganesha/node-legacy/warning.cjs')
} else {
  // use @ganesha/node for 16+
  module.exports.loader   = require.resolve('@ganesha/node')
  module.exports.warnings = require.resolve('@ganesha/node/ganesha-warn.cjs')
}

/** Arguments that need to be passed to Node to enable Ganesha */
const nodeOptions = module.exports.nodeOptions = [
  ...(isLegacy() ? ['--experimental-modules'] : []),
  // https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#resolving-user-conditions
  '--conditions=ganesha',
  // https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#wasm-modules
  `--experimental-wasm-modules`,
  // hide the experimental loader warning
  `--require=${module.exports.warnings}`,
  // https://nodejs.org/api/cli.html#--experimental-loadermodule
  `--experimental-loader=${module.exports.loader}`,
  // https://nodejs.org/api/cli.html#--experimental-specifier-resolutionmode
  '--experimental-specifier-resolution=node',
]

const initStandalone = module.exports.initStandalone = function initStandalone (argv) {
  // spawn Node.js with Ganesha loader enabled
  const args = [ ...nodeOptions, ...argv ]
  const opts = { stdio: 'inherit' }
  const proc = module.exports.spawnSync(process.execPath, args, opts)
  process.exit(proc.status)
}

const initSupervisor = module.exports.initSupervisor = function initSupervisor (argv) {

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
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    env: {
      ...process.env,
      "Ganesha_Live":    "",
      "Ganesha_Watched": "true",
      "Ganesha_Trace":   process.env["Ganesha_Trace"]
    },
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

const initShim = module.exports.initShim = function initShim (argv) {
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
  process.on('exit', () => {
    proc.kill(9)
  })
  //process.exit(proc.status)
}

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
