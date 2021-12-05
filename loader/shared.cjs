const { existsSync, statSync, readFileSync } = require('fs')
const sourceMapSupport = require('source-map-support')

const RE = {
  LITERATE:            /\.(?:ts|js|cjs|mjs).md$/,
  LITERATE_MODULE:     /\.(?:ts|js|mjs).md$/,
  LITERATE_TYPESCRIPT: /\.ts.md$/,
  MD:                  /\.md$/,
  TS:                  /\.ts(\.md)?$/
}

module.exports.is = {
  Literate:           x => RE.LITERATE.test(x),
  LiterateModule:     x => RE.LITERATE_MODULE.test(x),
  LiterateTypeScript: x => RE.LITERATE_TYPESCRIPT.test(x),
  Markdown:           x => RE.MD.test(x),
  Typescript:         x => RE.TS.test(x),

  Windows:            process.platform === 'win32',
  PathImport:         x => x[0] === '.' || x.startsWith('file:'),
  Directory:          path => existsSync(path) && statSync(path).isDirectory()
}

module.exports.sourceMaps = {}

module.exports.installSourceMapSupport = () => {
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment: 'node',
    retrieveSourceMap(url) {
      if (module.exports.sourceMaps[url]) {
        return { url, map: module.exports.sourceMaps[url] }
      }
      return null
    }
  })
}

module.exports.trace = (...args) => {
  if (process.env.LITERATE_DEBUG) {
    console.debug(...args)
  }
}

const FM_TYPES = module.exports.FM_TYPES = [
  'commonjs',
  'ecmascript',
  'typescript'
]

module.exports.getFMType = path => {
  return module.exports.getFM(readFileSync(path, 'utf8'))
}

module.exports.getFM = data => {
  try {
    return require('front-matter')(data)
  } catch (e) {
    console.warn(e)
    return {attributes:{}}
  }
}
