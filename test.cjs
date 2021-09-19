const {test} = require('tap')
const { parseFile } = require('./parse.cjs')
const { readFileSync } = require('fs')
const { spawnSync } = require('child_process')

test('extract CommonJS module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('example.cjs.md'), readFileSync('example.cjs', 'utf8')) })

test('extract ECMAScript module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('example.cjs.md'), readFileSync('example.cjs', 'utf8')) })

test('extract TypeScript module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('example.ts.md'), readFileSync('example.ts', 'utf8')) })

test('support loading of CommonJS modules', async({match})=>{
  const script = `process.exit(require('./example.cjs.md'))`
      , args = [ '-r', './loader.cjs'
               , '-e', script ]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('support loading of ECMAScript modules', async({match})=>{
  const script = `import('./example.mjs.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('support loading of TypeScript modules', async({match})=>{
  const script = `import('./example.ts.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })
