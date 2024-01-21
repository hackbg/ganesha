import { spawnSync } from 'node:child_process'

for (const pkg of [
  '@ganesha/esbuild',
  '@ganesha/oxc'
]) {
  console.log('Testing', pkg)
  spawnSync(`node --import ${pkg} tests/typescript.test.ts`, { stdio: 'inherit' })
}
