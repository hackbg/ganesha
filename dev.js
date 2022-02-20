#!/usr/bin/env node
const commands = module.exports = {}

const { spawnSync } = require('child_process')

const { resolve } = require('path')

const tap = suite => {
  return spawnSync(
    'tap',
    [ suite ],
    { stdio: 'inherit', cwd: resolve(__dirname, 'test') }
  )
}

commands['test'] = {

  all () {
    for (const suite of [
      'test-parser.cjs',
      'test-loader.cjs',
      'test-frontmatter.cjs',
      'test-misc.cjs',
    ]) {
      const { status } = tap(suite)
      if (status !== 0) process.exit(status)
    }
  },

  parser () {
    process.exit(tap('test-parser.cjs').status)
  },

  loader () {
    process.exit(tap('test-loader.cjs').status)
  },

  frontmatter () {
    process.exit(tap('test-frontmatter.cjs').status)
  },

  misc () {
    process.exit(tap('test-misc.cjs').status)
  },

  matrix () {
    process.exit(spawnSync(
      resolve(__dirname, 'src/node/ganesha-node'),
      [ 'test-matrix.cjs.md' ],
      { stdio: 'inherit', cwd: resolve(__dirname, 'test') }
    ).status)
  },

}

const { fileURLToPath } = require('url')
if (require.main === module) {
  const words = process.argv.slice(2)
  require('@hackbg/komandi').default(commands, words)
    .then(()=>process.exit(0))
}
