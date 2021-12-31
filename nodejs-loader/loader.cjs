const { addHook } = require('pirates')

const { parseString, extensions } = require('@hackbg/ganesha-core/parse.cjs')

const { installSourceMapSupport } = require('./sourcemaps.cjs')

const USAGE = `
  This module cannot be run as the main module.
  You need to use it with:
    node -r path/to/this/module path/to/your/script
`

let registered = false
module.exports.register = function register () {
  if (registered) return

  installSourceMapSupport()

  //patchCommonJsLoader(compile)

  addHook(function compile (code, filename, format) {

    if (filename.endsWith('.md')) {
      code     = parseString(code)
      filename = filename.slice(0, -3)
    }

    if (filename.endsWith('.ts')) {
      return require('./transform').esbuildToCjs(filename, code, format)
    }

    // This part should be optional depending on what context we're importing from
    if (filename.endsWith('.mjs')) {
      return require('./transform').tscToCjs(filename, code, format)
    }
    
    return code

  }, {
    exts: extensions,
    ignoreNodeModules: false
  })

  registered = true
}

if (require.main === module) {
  throw new Error(USAGE)
} else if (require.main === undefined) {
  module.exports.register()
}
