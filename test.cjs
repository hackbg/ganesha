const test = require('tape')
const { parseFile } = require('./parse.cjs')
const { readFileSync } = require('fs')
const { spawnSync } = require('child_process')

test.skip('support front matter')

test('extract CommonJS module from Markdown, preserving line numbers', async ({equal})=>{
  equal(parseFile('example.cjs.md'), readFileSync('example.cjs', 'utf8')) })

test('extract ECMAScript module from Markdown, preserving line numbers', async ({equal})=>{
  equal(parseFile('example.cjs.md'), readFileSync('example.cjs', 'utf8')) })

test('extract TypeScript module from Markdown, preserving line numbers', async ({equal})=>{
  equal(parseFile('example.ts.md'), readFileSync('example.ts', 'utf8')) })

test('support loading of CommonJS modules', async({plan, equal})=>{
  const script = `process.exit(require('./example.cjs.md'))`
      , args = [ '-r', './loader.cjs'
               , '-e', script ]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  equal(status, 123) })

test('support loading of ECMAScript modules', async({plan, equal})=>{
  const script = `import('./example.mjs.md').then(code=>process.exit(code))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  equal(status, 123) })

test('support loading of TypeScript modules', async({plan, equal})=>{
  const script = `import('./example.ts.md').then(code=>process.exit(code))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  equal(status, 123) })
