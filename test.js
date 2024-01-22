import { spawnSync } from 'node:child_process'
import { ok, equal } from 'node:assert'

import createCache from '@ganesha/caching'
const cache = await createCache({ path: '.temp' })
equal(await cache.get("foo"), null)
equal(await cache.put("foo", "bar"), null)
equal(await cache.get("foo"), bar)

for (const pkg of [
  '@ganesha/esbuild',
  '@ganesha/oxc'
]) {

  console.log('Testing', pkg)

  let output

  output = spawnSync(`node`, [`--import`, pkg, `tests/typescript.test.ts`])
  equal(
    output.stdout.toString(),
    "{ baz: { foo: '123' } }\n",
    "output should match"
  )

  output = spawnSync(`node`, [`--import`, pkg, `tests/stack.test.ts`])
  equal(
    output.status,
    1,
    'should exit with code 1'
  )
  if (pkg !== '@ganesha/oxc') { // oxc does not have source map support yet
    ok(
      output.stderr.toString().split('\n')[5].endsWith('stack.test.ts:2:7'),
      'should report correct error location'
    )
  }

}
