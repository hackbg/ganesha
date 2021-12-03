const { test, todo } = require('tap')
const { resolve: resolvePath } = require('path')
const { pathToFileURL } = require('url')

test('prioritize file import over directory import', async({same})=>{
  await import('@hackbg/ganesha/loader.mjs').then(({ resolve })=>{
    const path = resolvePath(__dirname, '../examples', 'example.ts')
    const url  = pathToFileURL(path).toString()
    same(resolve('./examples/example'), { url })
  })
})

todo('allow package manifest in front matter', async({same})=>{})

todo('allow importing a package from itself', async({same})=>{})
