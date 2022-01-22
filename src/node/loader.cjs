const { addHook } = require('pirates')

const {
  parseString,
  extensions
} = require('@ganesha/core/parse.cjs')

const {
  installSourceMapSupport,
  addSourceMap
} = require('./sourcemaps.cjs')

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
      const { id, compiled, map } = require('@ganesha/core/transform').esbuildToCjs(filename, code, format)
      addSourceMap(id, map, 'commonjs')
      return compiled
    }

    // This part should be optional depending on what context we're importing from?
    if (filename.endsWith('.mjs')) {
      const { id, compiled, map } = require('@ganesha/core/transform').tscToCjs(filename, code, format)
      addSourceMap(id, map, 'commonjs')
      return compiled
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
