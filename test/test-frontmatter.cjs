const { test } = require('tap')
const { spawnSync } = require('child_process')

const SCRIPTS = {

  'CommonJS': [
    '-r', '@ganesha/node/loader.cjs',
    '-e', `process.exit(require('./examples/example_cjs.md'))`
  ],

  'ECMAScript': [
    '--unhandled-rejections=throw',
    '--experimental-loader', '@ganesha/node',
    '--input-type=module',
    '-e', `import('./examples/example_mjs.md').then(code=>process.exit(code.default))`
  ],

  'TypeScript': [
    '--unhandled-rejections=throw',
    '--experimental-loader', '@ganesha/node',
    '--input-type=module',
    '-e', `import('./examples/example_ts.md').then(code=>process.exit(code.default))`
  ],

}

for (const [language, args] of Object.entries(SCRIPTS)) {
  test(`Loader: identify literate ${language} from front matter`, async ({same}) => {
    same(spawnSync('node', args, { stdio: 'inherit' }).status, 123)
  })
}
