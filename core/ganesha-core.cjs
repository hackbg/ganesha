#!/usr/bin/env node

const { dirname, extname } = require('path')
const { readFileSync } = require('fs')

const settings = {
  // Print tracing output
  trace:       !!process.env['Ganesha_Trace'],
  // Hide Ganesha from process.argv
  hide:        !!process.env['Ganesha_Hide'],
  // Don't generate source map
  noSourceMap: !!process.env['Ganesha_NoSourceMap'],
  // Languages (in header of code blocks) to accept.
  // By default, accepts all code blocks.
  languages:   (process.env['Ganesha_Languages']??'').split(',').map(x=>x.trim()),
  // TODO
  live:        !!process.env['Ganesha_Live'],
  // TODO
  watched:     !!process.env['Ganesha_Watched'],
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

module.exports = {
  settings,
  trace,
  parseFile,
  parseString,
}

function parseFile (name) {
  return parseString(require('fs').readFileSync(name, 'utf8'))
}

function parseString (source = "") {
  let target = ''
  const tokens = require('marked').lexer(source)
  for (const token of tokens) {
    if (token.type === 'code') {
      target += `\n${token.text}\n`
    } else {
      const text = (token.raw??'').split('\n').join(`\n/// `)
      target += text
    }
  }
  return target
}

if (require.main === module) {
  const [source] = process.argv.slice(2)
  if (source) {
    try {
      const target = parseFile(source)
      process.stdout.write(target)
    } catch (e) {
      process.stderr.write(e.stack)
    }
  } else {
    process.stderr.write('\nUsage:\n  ganesha FILENAME.md\n\n')
    process.exit(1)
  }
}
