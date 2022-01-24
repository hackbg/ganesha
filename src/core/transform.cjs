const { dirname, extname } = require('path')
const { readFileSync } = require('fs')
const config = require('./config.cjs')

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
  printWarnings(warnings)
  return { id: filename, compiled, map }
}

module.exports.esbuildToMjs = function esbuildToMjs (sourcefile, source, format) {
  const { code, warnings, map } = require('esbuild').transformSync(source, {
    sourcefile,
    sourcemap:  'both',
    loader:     'ts',
    target:     'esnext',
    format:     format === 'module' ? 'esm' : 'cjs'
  })
  printWarnings(warnings)
  return { id: url, compiled: code, map }
}

module.exports.tscToCjs = function tscToCjs (fileName, code, format) {
  const { ModuleKind } = require('typescript')
  const compilerOptions = {
    target:        'es5',
    ...getCompilerOptions(fileName),
    module:        ModuleKind.CommonJS,
    sourceMap:     true,
    inlineSources: true
  }
  if (process.env.LITERATE_DEBUG) console.debug(`[tscToCjs] ${fileName}`, compilerOptions)
  const { transpileModule } = require('typescript')
  const {
    outputText,
    diagnostics,
    sourceMapText
  } = transpileModule(code, { compilerOptions, fileName })
  printWarnings(diagnostics)
  return { id: fileName, compiled: outputText, map: sourceMapText }
}

module.exports.tscToMjs = function tscToMjs (fileName, code, format) {
  const { ModuleKind } = require('typescript')
  const compilerOptions = {
    target:        'es2020',
    ...getCompilerOptions(fileName),
    module:        ModuleKind.ESNext,
    sourceMap:     true,
    inlineSources: true
  }
  if (process.env.LITERATE_DEBUG) console.debug(`[tscToMjs] ${fileName}`, compilerOptions)
  const { transpileModule } = require('typescript')
  const {
    outputText,
    diagnostics,
    sourceMapText
  } = transpileModule(code, { compilerOptions, fileName })
  printWarnings(diagnostics)
  return { id: fileName, compiled: outputText, map: sourceMapText }
}

function getCompilerOptions (fileName) {
  const dir = dirname(fileName)
  const { data, path } = config.loadSync(['tsconfig.json'], dir)
  if (path && data) return data.compilerOptions
  return {}
}

function inferPackageFormat (cwd, filename) {

  if (filename.endsWith('.mjs'))    return 'esm'
  if (filename.endsWith('.mjs.md')) return 'esm'
  if (filename.endsWith('.cjs'))    return 'cjs'
  if (filename.endsWith('.cjs.md')) return 'cjs'

  const { data } = config.loadSync(['package.json'], cwd)
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
