#!/usr/bin/env node

const { dirname, extname } = require('path')
const { readFileSync } = require('fs')
const JSONC = require('jsonc-parser')
const JoyCon = require('joycon')

const joycon = new JoyCon()

joycon.addLoader({
  test: /\.json$/,
  loadSync (file) {
    return JSONC.parse(readFileSync(file, 'utf8'))
  }
})

const settings = {
  trace:       !!process.env['Ganesha_Trace'],
  hide:        !!process.env['Ganesha_Hide'],
  live:        !!process.env['Ganesha_Live'],
  watched:     !!process.env['Ganesha_Watched'],
  noSourceMap: !!process.env['Ganesha_NoSourceMap'],
}

const T0 = + new Date()

const trace = (...args) => {
  if (!settings.trace) return
  const dT = 'T+'+(Number(+ new Date() - T0)/1000).toFixed(3)
  console.debug(dT, ...args)
}

const extensions = [
  '.ts.md', '.mjs.md', '.cjs.md', '.js.md',
  '.ts', '.mjs', '.js', '.cjs',
  '.md'
]

const RE_NEWLINE = /\r\n|\r|\n/

const sourceMapOptions = {
  sourceMap:       true,
  inlineSources:   true,
  inlineSourceMap: settings.noSourceMap // for coverage support
}

module.exports = {
  settings,
  joycon,
  trace,
  parseFile,
  parseString,
  esbuildToCjs,
  esbuildToMjs,
  tscToCjs,
  tscToMjs
}

function parseFile (name) {
  return parseString(require('fs').readFileSync(name, 'utf8'))
}

function parseString (source = "") {

  // The parser works on a line-by-line basis,
  // so let's start by splitting the source code into lines.
  const inputLines  = source.split(RE_NEWLINE)

  // Let's collect the lines of the output file here.
  const outputLines = []

  // Let's start in text mode, and toggle this flag
  // every time the document switches between prose and code.
  let isCode = false

  // Let's iterate line by line over the input string,
  // collecting the processed lines.
  for (let lineNumber = 0; lineNumber < inputLines.length; lineNumber++) {

    // Trim any spaces from the end of each line.
    // Used to preserve empty lines between the two modes.
    let line = inputLines[lineNumber].trimEnd()

    if (line.startsWith('```')) {
      // Lines that begin with three backticks are
      // either the beginning or the end of a code block.
      // We replace those with blank lines.
      isCode = !isCode
      outputLines.push(['', true])
    } else if (line.length === 0) {
      // Let's keep empty lines empty.
      // Otherwise empty lines outside code blocks
      // would get the three-slash prefix.
      outputLines.push(['', true])
    } else {
      // All other lines are pushed as-is to the output buffer,
      // alongside a flag that determines whether they are code.
      outputLines.push([line, isCode])
    }

  }

  // The output has the text lines prefixed with three slashes,
  // the starts/ends of code blocks replaced with empty lines,
  // and the code front and center.
  return outputLines.map(([line, isCode])=>isCode?line:`/// ${line}`).join('\n')

}

function esbuildToCjs (filename, code, format) {
  const dir = dirname(filename)
  const { target, jsxFactory, jsxFragment } = getOptions(dir)
  format = format || inferPackageFormat(dir, filename)
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

function esbuildToMjs (sourcefile, source, format) {
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

function tscToCjs (fileName, code, format) {
  const { ModuleKind } = require('typescript')
  const compilerOptions = {
    target: 'es5',
    ...getCompilerOptions(fileName),
    module: ModuleKind.CommonJS,
    ...sourceMapOptions
  }
  trace(`T2C ${fileName}`, JSON.stringify(compilerOptions))
  const { transpileModule } = require('typescript')
  const { outputText, diagnostics, sourceMapText } = transpileModule(code, { compilerOptions, fileName })
  printWarnings(diagnostics)
  return { id: fileName, compiled: outputText, map: sourceMapText }
}

function tscToMjs (fileName, code, format) {
  const { ModuleKind } = require('typescript')
  const compilerOptions = {
    target: 'es2020',
    ...getCompilerOptions(fileName),
    module:          ModuleKind.ESNext,
    ...sourceMapOptions
  }
  trace(`   T2M ${fileName}`, JSON.stringify(compilerOptions))
  const { transpileModule } = require('typescript')
  let result
  try {
    result = transpileModule(code, { compilerOptions, fileName })
  } catch (e) {
    console.error(`   T2M compile ${fileName} to ESM failed:`, e.message)
    throw e
  }
  const { outputText, diagnostics, sourceMapText } = result
  printWarnings(diagnostics)
  return { id: fileName, compiled: outputText, map: sourceMapText }
}

function getCompilerOptions (fileName) {
  const dir = dirname(fileName)
  const { data, path } = joycon.loadSync(['tsconfig.json'], dir)
  if (path && data) return data.compilerOptions
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

if (require.main === module) {
  const [source] = process.argv.slice(2)
  if (source) {
    try {
      process.stdout.write(parseFile(source))
    } catch (e) {
      process.stderr.write(e.stack)
    }
  } else {
    process.stderr.write('\nUsage:\n  ganesha FILENAME.md\n\n')
    process.exit(1)
  }
}
