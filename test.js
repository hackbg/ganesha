import { spawnSync } from 'node:child_process'
import { ok, equal } from 'node:assert'
import { rimraf } from 'rimraf'
import createCache from '@ganesha/caching'

const GANESHA_CACHE_PATH = '.temp'
await rimraf(GANESHA_CACHE_PATH)
const cache = await createCache({ path: '.temp' })
equal(await cache.get("foo"), null)
equal(await cache.put("foo", "bar"), 'ab6e5f64077e7d8a')
equal((await cache.get("foo")).output, "bar")

const t0 = performance.now()

const results = {}

for (const GANESHA_CACHE_PATH_OFF of ['1', '']) {

  console.log(`Testing with GANESHA_CACHE_PATH_OFF=${GANESHA_CACHE_PATH_OFF}`)

  for (const pkg of [
    '@ganesha/esbuild',
    '@ganesha/esbuild-wasm',
    '@ganesha/oxc'
  ]) {
    try {
      console.log('Testing', pkg)
      const node = (...args) => spawnSync('node', args, { env })
      const env = { GANESHA_CACHE_PATH, GANESHA_CACHE_PATH_OFF, GANESHA_DEBUG: "1" }
      let t1, output

      t1 = performance.now()
      output = node(`--import`, pkg, `tests/typescript.test.ts`)
      console.log('stdout:\n'+output.stdout.toString())
      console.log('stderr:\n'+output.stderr.toString())
      equal(output.stdout.toString(), "{ baz: { foo: '123' } }\n", `${pkg}: should match`)
      console.log('Tested in', performance.now() - t1)

      t1 = performance.now()
      output = node(`--import`, pkg, `tests/stack.test.ts`)
      equal(output.status, 1, `${pkg}: should exit with code 1`)
      console.log('stdout:\n'+output.stdout.toString())
      console.log('stderr:\n'+output.stderr.toString())
      ok(output.stderr.toString().split('\n')[9].endsWith('stack.test.ts:2:7'),
        `${pkg}: report correct error location`)
      console.log('Tested in', performance.now() - t1)
      //results[pkg] = 'ok'
      console.log(`${pkg}: ok`)
    } catch (e) {
      results[pkg] = e
      console.log(`${pkg}: fail`)
      continue
    }
  }
}

console.log('Tests passed in', performance.now() - t0)
console.log('Errors:', ...Object.entries(results))
