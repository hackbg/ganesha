const { test, todo } = require('tap')
const { readFileSync } = require('fs')
const { spawnSync } = require('child_process')
const { resolve: resolvePath } = require('path')
const { pathToFileURL } = require('url')
const { parseFile } = require('../core/parse.cjs')

const $ = (...args) => resolvePath(__dirname, ...args)

test('Parser: extract CommonJS module from Markdown, preserving line numbers', async ({same})=>{
  same(
    parseFile($('examples/example.cjs.md')),
    readFileSync($('examples/example.cjs'), 'utf8')
  )
})

test('Parser: extract ECMAScript module from Markdown, preserving line numbers', async ({same})=>{
  same(
    parseFile($('examples/example.cjs.md')),
    readFileSync($('examples/example.cjs'), 'utf8')
  )
})

test('Parser: extract TypeScript module from Markdown, preserving line numbers', async ({same})=>{
  same(
    parseFile($('examples/example.ts.md')),
    readFileSync($('examples/example.ts'), 'utf8')
  )
})

test('CJS loader: support loading of CommonJS modules', async({same})=>{
  const script = `process.exit(require('${$('./examples/example.cjs.md')}'))`
  const args = [ '-r', '@hackbg/ganesha-nodejs-loader/loader.cjs'
               , '-e', script ]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('ESM loader: support loading of ECMAScript modules', async({same})=>{
  const script = `import('${$('./examples/example.mjs.md')}').then(code=>process.exit(code.default))`
  const args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha-nodejs-loader/loader.mjs'
               , '--input-type=module', '-e', script]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('ESM loader: support loading of TypeScript modules', async({same})=>{
  const script = `import('${$('./examples/example.ts.md')}').then(code=>process.exit(code.default))`
  const args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha-nodejs-loader/loader.mjs'
               , '--input-type=module', '-e', script]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('CJS loader: identify literate CJS from front matter', async({same})=>{
  const script = `process.exit(require('${$('./examples/example_cjs.md')}'))`
  const args = [ '-r', '@hackbg/ganesha-nodejs-loader/loader.cjs'
               , '-e', script ]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('ESM loader: identify literate ESM from front matter', async({same})=>{
  const script = `import('${$('./examples/example_mjs.md')}').then(code=>process.exit(code.default))`
  const args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha-nodejs-loader/loader.mjs'
               , '--input-type=module', '-e', script]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('ESM loader: identify literate TS from front matter', async({same})=>{
  const script = `import('${$('./examples/example_ts.md')}').then(code=>process.exit(code.default))`
  const args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha-nodejs-loader/loader.mjs'
               , '--input-type=module', '-e', script]
  const {status} = spawnSync('node', args, { stdio: 'inherit' })
  same(status, 123)
})

test('prioritize file import over directory import', async({same})=>{
  const { resolve } = await import('../nodejs-loader/loader.mjs')
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
