const { test, todo } = require('tap')
const { resolve: resolvePath } = require('path')
const { pathToFileURL } = require('url')

const $ = (...args) => resolvePath(__dirname, ...args)

test('prioritize file import over directory import', async({same})=>{
  const { resolve } = await import('@ganesha/node/loader.mjs')
  const url = pathToFileURL($('./examples/example.ts.md')).toString()
  const context = {
    parentURL:  pathToFileURL(__filename).href,
    conditions: [ 'node', 'import' ]
  }
  same(
    resolve('./examples/example', context).url,
    url
  )
})

todo('allow package manifest in front matter', async({same})=>{})

todo('allow importing a package from itself', async({same})=>{})

todo('OK for JavaScript to import TypeScript', async({same})=>{})
