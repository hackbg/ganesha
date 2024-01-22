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

for (const GANESHA_CACHE_PATH_OFF of ['1', '']) {

  console.log(`Testing with GANESHA_CACHE_PATH_OFF=${GANESHA_CACHE_PATH_OFF}`)

  for (const pkg of [
    '@ganesha/esbuild',
    '@ganesha/oxc'
  ]) {

    console.log('Testing', pkg)

    let t1
    let output

    t1 = performance.now()
    output = spawnSync(`node`, [`--import`, pkg, `tests/typescript.test.ts`], {
      env: { GANESHA_CACHE_PATH, GANESHA_CACHE_PATH_OFF, GANESHA_DEBUG: "1" }
    })
    console.log('stdout:\n'+output.stdout.toString())
    console.log('stderr:\n'+output.stderr.toString())
    equal(
      output.stdout.toString(),
      "{ baz: { foo: '123' } }\n",
      "output should match"
    )
    console.log('Tested in', performance.now() - t1)

    t1 = performance.now()
    output = spawnSync(`node`, [`--import`, pkg, `tests/stack.test.ts`], {
      env: { GANESHA_CACHE_PATH, GANESHA_CACHE_PATH_OFF, GANESHA_DEBUG: "1" }
    })
    equal(
      output.status,
      1,
      'should exit with code 1'
    )
    console.log('stdout:\n'+output.stdout.toString())
    console.log('stderr:\n'+output.stderr.toString())
    if (pkg !== '@ganesha/oxc') { // oxc does not have source map support yet
      ok(
        output.stderr.toString().split('\n')[9].endsWith('stack.test.ts:2:7'),
        'should report correct error location'
      )
    }
    console.log('Tested in', performance.now() - t1)

  }
}

console.log('Tests passed in', performance.now() - t0)
