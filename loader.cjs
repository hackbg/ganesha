const { dirname, extname } = require('path')
    , { readFileSync }     = require('fs')
    , { readFile }         = require('fs/promises')
    , { Module }           = require('module')

const sourceMaps    = require('source-map-support')
    , { buildSync } = require('esbuild')
    , { addHook }   = require('pirates')
    , JoyCon        = require('joycon')
    , { parse }     = require('jsonc-parser')

const { parseString } = require('./parse.cjs')

const joycon = new JoyCon()
joycon.addLoader({ test: /\.json$/, loadSync: file => parse(readFileSync(file, 'utf8')) })

const map = {}

const loaders = {
  '.js':  'js',
  '.jsx': 'jsx',
  '.ts':  'ts',
  '.tsx': 'tsx',
  '.mjs': 'js',
  '.cjs': 'js',
}

const extensions = Object.keys(loaders)

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/

register()

function register () {
  installSourceMapSupport()
  //patchCommonJsLoader(compile)
  addHook(parseString, { exts: [ '.md' ] })
  addHook(compile, { exts: extensions })
  function compile (code, filename, format) {
    const dir = dirname(filename)
    const { target, jsxFactory, jsxFragment } = getOptions(dir)
    format = format ?? inferPackageFormat(dir, filename)
    const { code: js, warnings, map: jsSourceMap } = buildSync(code, {
      sourcefile: filename,
      sourcemap:  'both',
      loader:     loaders[extname(filename)],
      target:     `node${process.version.slice(1)}`,
      jsxFactory, jsxFragment, format })
    map[filename] = jsSourceMap
    if (warnings && warnings.length > 0) {
      for (const warning of warnings) {
        console.log(warning.location)
        console.log(warning.text) } }
    return js } }

function getOptions (cwd) {
  const { data, path } = joycon.loadSync(['tsconfig.json'], cwd)
  if (path && data) return {
    jsxFactory: data.compilerOptions?.jsxFactory,
    jsxFragment: data.compilerOptions?.jsxFragmentFactory,
    target: data.compilerOptions?.target, }
  return {} }

function inferPackageFormat (cwd, filename) {
  if (filename.endsWith('.mjs')) return 'esm'
  if (filename.endsWith('.cjs')) return 'cjs'
  const { data } = joycon.loadSync(['package.json'], cwd)
  return data && data.type === 'module' ? 'esm' : 'cjs' }

function installSourceMapSupport () {
  sourceMaps.install({
    handleUncaughtExceptions: false,
    environment: 'node',
    retrieveSourceMap(file) {
      if (map[file]) return { url: file, map: map[file], }
      return null } }) }

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
      module._compile(content, filename) } } }
