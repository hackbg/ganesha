// based on https://github.com/earldouglas/codedown
const Parser = require('tree-sitter')
const { readFileSync } = require('fs')

const parser = new Parser()
parser.setLanguage(require('tree-sitter-markdown'))

module.exports = {
  parseFile,
  parseString
}

function parseFile (name) {
  return parseString(readFileSync(name, 'utf8'))
}

function parseString (source) {
  let output = []
  const cursor = parser.parse(source).walk()
  if (cursor.gotoFirstChild()) {
    do {
      if (cursor.nodeType === 'fenced_code_block') {
        output.push(`\n${cursor.nodeText.split('\n').slice(1, -1).join('\n')}\n`)
      } else {
        output.push(cursor.nodeText.split('\n').map(x=>'/// '+x).join('\n'))
      }
    } while (cursor.gotoNextSibling())
  }
  return output.join('\n\n') + '\n'
}

//const marked = require('marked')
//const renderer = new marked.Renderer()
//for (const key of Object.getOwnPropertyNames(marked.Renderer.prototype)) {
  //if (key === 'constructor') continue
  //renderer[key] = x => ''
//}
//Object.assign(renderer, {
  //code (src, language, escaped) { return `\n${src}` },
  //listitem (text) { return text },
  //list (body, ordered) { return body }
//})
//marked.use({renderer})
//module.exports = src => marked(src).replace(/\n+$/g, '\n').trim()
