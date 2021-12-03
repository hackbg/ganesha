const { test }         = require('tap')
const { readFileSync } = require('fs')
const { parseFile }    = require('../loader/parse.cjs')

const EXAMPLES = {
  'CommonJS':   ['examples/example.cjs.md', 'examples/example.cjs'],
  'ECMAScript': ['examples/example.mjs.md', 'examples/example.mjs'],
  'TypeScript': ['examples/example.ts.md',  'examples/example.ts']
}

for (const [language, [literate, parsed]] of Object.entries(EXAMPLES)) {
  test(
    `Parser: extract ${language} module from Markdown, preserving line numbers`,
    async ({same}) => same(parseFile(literate), readFileSync(parsed, 'utf8'))
  )
}
