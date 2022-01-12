const commands = module.exports = {}

const { spawnSync } = require('child_process')

const { resolve } = require('path')

commands['test'] = {

  all () {
    throw new Error('not implemented')
  },

  core () {
    process.exit(spawnSync(
      'tap',
      [ 'test-core.cjs' ],
      { stdio: 'inherit', cwd: resolve(__dirname, 'test') }
    ).status)
  },

  frontmatter () {
    throw new Error('not implemented')
  },

  loader () {
    throw new Error('not implemented')
  },

  matrix () {
    throw new Error('not implemented')
  },

  misc () {
    throw new Error('not implemented')
  },

  parser () {
    throw new Error('not implemented')
  }

}

const { default: runCommands } = require('@hackbg/komandi')
const { fileURLToPath } = require('url')
if (require.main === module) {
  const words = process.argv.slice(2)
  runCommands(commands, words).then(()=>process.exit(0))
}
