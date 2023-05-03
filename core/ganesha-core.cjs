#!/usr/bin/env node

const { dirname, extname } = require('path')
const { readFileSync } = require('fs')

const settings = {

  // Print tracing output
  trace:
    !!process.env['Ganesha_Trace'],

  // Code blocks with no language default to this language.
  defaultLanguage:
    process.env['Ganesha_Language_Default'],

  // Code blocks with language outside of this list are kept as comments.
  allowedLanguages:
    (process.env['Ganesha_Language_Allow']??'js,javascript,ts,typescript').split(',').map(x=>x.trim()).filter(Boolean),

  // TODO
  live:
    !!process.env['Ganesha_Live'],
  // TODO
  watched:
    !!process.env['Ganesha_Watched'],
  // Hide Ganesha from process.argv
  hide:
    !!process.env['Ganesha_Hide'],
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
  const tokens = require('marked').lexer(source)
  let output = ''
  for (const token of tokens) {
    const isCode = token.type === 'code' && (
      settings.allowedLanguages.length === 0 ||
      settings.allowedLanguages.includes(token.lang ?? settings.defaultLanguage)
    )
    if (isCode) {
      const language = token.lang ?? settings.defaultLanguage
      output += `${token.text}\n`
    } else {
      let text = token.raw
      if (text[0] === '\n') text = text.slice(1) // `${(token.raw??'').split('\n').join(`\n/// `)}`
      text = text.split('\n').join('\n/// ')
      output += `/// ${text}\n`//${text}\n`
    }
  }
  return output
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
