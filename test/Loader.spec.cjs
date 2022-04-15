const context = { stdio: 'inherit', cwd: __dirname }

for (const [language, args] of Object.entries({

  'CommonJS': [
    '-r', '@ganesha/node-legacy/loader.cjs',
    '-e', `process.exit(require('./examples/example.cjs.md'))`
  ],

  'ECMAScript': [
    '--unhandled-rejections=throw',
    '--experimental-loader', '@ganesha/node',
    '--input-type=module',
    '-e', `import('./examples/example.mjs.md').then(code=>process.exit(code.default))`
  ],

  'TypeScript': [
    '--unhandled-rejections=throw',
    '--experimental-loader', '@ganesha/node',
    '--input-type=module',
    '-e', `import('./examples/example.ts.md').then(code=>process.exit(code.default))`
  ],

})) {

  const name = `Loader: support loading of ${language} modules`

  module.exports[name] = async ({equal}) => equal(
    require('child_process').spawnSync('node', args, context).status,
    123
  )

}
