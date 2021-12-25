const extensions = [
  '.ts.md', '.mjs.md', '.cjs.md', '.js.md',
  '.ts', '.mjs', '.js', '.cjs',
  '.md'
]

const RE_NEWLINE = /\r\n|\r|\n/

module.exports = {
  RE_NEWLINE,
  extensions,
  parseFile,
  parseString
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

function isCode (source = "", lang = "", start = 0) {
  return source.slice(start, start + lang.length) === lang && lang;
}

function isBlock(source = "", cursor = 0) {
  return source.slice(cursor, cursor + 3) === '```';
}

/*
 *
      content: '',
      language: codeBlocks[0].language,
      location: {
        start: codeBlocks[0].location.start,
        end:   codeBlocks[codeBlocks.length-1].location.end
      },
*/
