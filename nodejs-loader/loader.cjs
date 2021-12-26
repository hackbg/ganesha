const { dirname, extname } = require('path')
    , { readFileSync } = require('fs')
    , { Module } = require('module')

const { transformSync } = require('esbuild')
    , { addHook } = require('pirates')
    , JoyCon = require('joycon')
    , { parse } = require('jsonc-parser')

const { parseString, extensions } = require('@hackbg/ganesha-core/parse.cjs')
const { installSourceMapSupport, addSourceMap } = require('./sourcemaps.cjs')

const joycon = new JoyCon()
joycon.addLoader({
  test: /\.json$/,
  loadSync: file => parse(readFileSync(file, 'utf8'))
})

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

    const dir = dirname(filename)
    const { target, jsxFactory, jsxFragment } = getOptions(dir)

    format = format ?? inferPackageFormat(dir, filename)

    if (
      filename.endsWith('.ts') ||
      filename.endsWith('.mjs')
    ) {

      const { code: compiled, warnings, map: jsSourceMap } = transformSync(code, {
        format:     'cjs',
        sourcefile: filename,
        sourcemap:  'both',
        target:     `node${process.version.slice(1)}`,
        loader:     {'.js':  'js',
                     '.jsx': 'jsx',
                     '.ts':  'ts',
                     '.tsx': 'tsx',
                     '.mjs': 'js',
                     '.cjs': 'js',}[extname(filename)],
        jsxFactory,
        jsxFragment,
      })

      addSourceMap(filename, jsSourceMap)

      if (warnings && warnings.length > 0) {
        for (const warning of warnings) {
          console.log(warning.location)
          console.log(warning.text)
        }
      }

      return compiled

    } else {
      return code
    }

  }, {
    exts: extensions,
    ignoreNodeModules: false
  })

  registered = true
}

function getOptions (cwd) {
  const { data, path } = joycon.loadSync(['tsconfig.json'], cwd)
  if (path && data) return {
    jsxFactory:  data.compilerOptions?.jsxFactory,
    jsxFragment: data.compilerOptions?.jsxFragmentFactory,
    target:      data.compilerOptions?.target
  }
  return {}
}

function inferPackageFormat (cwd, filename) {
  if (filename.endsWith('.mjs')) return 'esm'
  if (filename.endsWith('.mjs.md')) return 'esm'
  if (filename.endsWith('.cjs')) return 'cjs'
  if (filename.endsWith('.cjs.md')) return 'cjs'
  const { data } = joycon.loadSync(['package.json'], cwd)
  return data && data.type === 'module' ? 'esm' : 'cjs'
}

/** Patch the Node CJS loader to suppress the ESM error
  * https://github.com/nodejs/node/blob/069b5df/lib/internal/modules/cjs/loader.js#L1125
  * As per https://github.com/standard-things/esm/issues/868#issuecomment-594480715 */
function patchCommonJsLoader (compile) {
  const extensions = Module._extensions
  const jsHandler = extensions['.js']
  extensions['.js']     =
  extensions['.js.md']  =
  extensions['.cjs.md'] =
  extensions['.mjs.md'] =
  function (module, filename) {
    try { return jsHandler.call(this, module, filename) } catch (error) {
      if (error.code !== 'ERR_REQUIRE_ESM') throw error
      let content = readFileSync(filename, 'utf8')
      content = compile(content, filename, 'cjs')
      module._compile(content, filename)
    }
  }
}

if (require.main === module) {
  throw new Error(USAGE)
} else if (require.main === undefined) {
  module.exports.register()
}
