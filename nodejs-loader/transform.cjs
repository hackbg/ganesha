const { dirname, extname } = require('path')
    , { readFileSync } = require('fs')

const { parse } = require('jsonc-parser')
const JoyCon = require('joycon')
const joycon = new JoyCon()
joycon.addLoader({
  test: /\.json$/,
  loadSync: file => parse(readFileSync(file, 'utf8'))
})

const { addSourceMap } = require('./sourcemaps.cjs')

module.exports.esbuildToCjs = function esbuildToCjs (filename, code, format) {
  const dir = dirname(filename)
  const { target, jsxFactory, jsxFragment } = getOptions(dir)
  format = format ?? inferPackageFormat(dir, filename)
  const loader = {
    '.js':  'js',
    '.jsx': 'jsx',
    '.ts':  'ts',
    '.tsx': 'tsx',
    '.mjs': 'js',
    '.cjs': 'js'
  }[extname(filename)]
  const options = {
    format:     'cjs',
    sourcefile: filename,
    sourcemap:  'both',
    target:     `node${process.version.slice(1)}`,
    loader,
    jsxFactory,
    jsxFragment,
  }
  const { code: compiled, warnings, map } = require('esbuild').transformSync(code, options)
  addSourceMap(filename, map)
  printWarnings(warnings)
  return compiled
}

module.exports.esbuildToMjs = function esbuildToMjs (sourcefile, source, format) {
  const { code, warnings, map } = require('esbuild').transformSync(source, {
    sourcefile,
    sourcemap:  'both',
    loader:     'ts',
    target:     'esnext',
    format:     format === 'module' ? 'esm' : 'cjs'
  })
  addSourceMap(url, map)
  printWarnings(warnings)
  return code
}

module.exports.tscToCjs = function tscToCjs (fileName, code, format) {
  const { transpileModule, ModuleKind } = require('typescript')
  const {
    outputText,
    diagnostics,
    sourceMapText
  } = transpileModule(code, {
    compilerOptions: {
      module:        ModuleKind.CommonJS,
      sourceMap:     true,
      inlineSources: true
    },
    fileName
  })
  addSourceMap(fileName, sourceMapText)
  printWarnings(diagnostics)
  return outputText
}

module.exports.tscToMjs = function tscToMjs (fileName, code, format) {
  const { transpileModule, ModuleKind } = require('typescript')
  const {
    outputText,
    diagnostics,
    sourceMapText
  } = transpileModule(code, {
    compilerOptions: {
      module:        ModuleKind.ESNext,
      sourceMap:     true,
      inlineSources: true
    },
    fileName
  })
  addSourceMap(fileName, sourceMapText)
  printWarnings(diagnostics)
  return outputText
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

  if (filename.endsWith('.mjs'))    return 'esm'
  if (filename.endsWith('.mjs.md')) return 'esm'
  if (filename.endsWith('.cjs'))    return 'cjs'
  if (filename.endsWith('.cjs.md')) return 'cjs'

  const { data } = joycon.loadSync(['package.json'], cwd)
  return data && data.type === 'module' ? 'esm' : 'cjs'

}

function printWarnings (warnings = []) {
  if (warnings && warnings.length > 0) {
    for (const warning of warnings) {
      console.log(warning.location)
      console.log(warning.text)
    }
  }
}
