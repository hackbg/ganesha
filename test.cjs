const {test, todo} = require('tap')
const { parseFile } = require('./parse.cjs')
const { readFileSync } = require('fs')
const { spawnSync } = require('child_process')

test('extract CommonJS module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('examples/example.cjs.md'), readFileSync('examples/example.cjs', 'utf8')) })

test('extract ECMAScript module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('examples/example.cjs.md'), readFileSync('examples/example.cjs', 'utf8')) })

test('extract TypeScript module from Markdown, preserving line numbers', async ({match})=>{
  match(parseFile('examples/example.ts.md'), readFileSync('examples/example.ts', 'utf8')) })

test('support loading of CommonJS modules', async({match})=>{
  const script = `process.exit(require('./examples/example.cjs.md'))`
      , args = [ '-r', './loader.cjs'
               , '-e', script ]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('support loading of ECMAScript modules', async({match})=>{
  const script = `import('./examples/example.mjs.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha/loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('support loading of TypeScript modules', async({match})=>{
  const script = `import('./examples/example.ts.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', '@hackbg/ganesha/loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('identify literate CJS from front matter', async({match})=>{
  const script = `process.exit(require('./examples/example_cjs.md'))`
      , args = [ '-r', '@hackbg/ganesha/loader.cjs'
               , '-e', script ]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('identify literate ESM from front matter', async({match})=>{
  const script = `import('./examples/example_mjs.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

test('identify literate TS from front matter', async({match})=>{
  const script = `import('./examples/example_ts.md').then(code=>process.exit(code.default))`
      , args = [ '--unhandled-rejections=throw'
               , '--experimental-loader', './loader.mjs'
               , '--input-type=module', '-e', script]
      , {status} = spawnSync('node', args, { stdio: 'inherit' })
  match(status, 123) })

todo('allow package manifest in front matter', async({match})=>{})
