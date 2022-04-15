const $ = (...args) => require('path').resolve(__dirname, ...args)

for (const [language, [literate, parsed]] of Object.entries({
  'CommonJS':   ['examples/example.cjs.md', 'examples/example.cjs'],
  'ECMAScript': ['examples/example.mjs.md', 'examples/example.mjs'],
  'TypeScript': ['examples/example.ts.md',  'examples/example.ts']
})) {
  module.exports[
    `Parser: extract ${language} module from Markdown, preserving line numbers`
  ] = async ({equal}) => equal(
    require('@ganesha/core/parse.cjs').parseFile($(literate)),
    require('fs').readFileSync($(parsed), 'utf8')
  )
}
