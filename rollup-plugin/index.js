const { fileURLToPath } = require('url')
const { parseString } = require('@hackbg/ganesha/parse.cjs')

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
    , isLiterate  = x => RE_LITERATE.test(x)
const RE_TYPESCRIPT = /\.ts.md$/
    , isTypescript  = x => RE_TYPESCRIPT.test(x)
const isWindows = process.platform === "win32"

module.exports = function ganeshaPlugin () {
  return {

    name: 'rollup-plugin-ganesha',

    resolveId (source) {
      console.log('resolveId', source)
      return null
    },

    transform (code, id) {
      console.log('TRANSFORM', id, isLiterate(id))
      if (isLiterate(id)) {
        code = parseString(code)
        let map = null
        if (isTypescript(id)){
          const { transformSync } = require('esbuild')
          const compiled = transformSync(code, {
            sourcefile: id,
            sourcemap: 'both',
            loader: 'ts',
            target: 'esnext',
            format: 'esm' //format === 'module' ? 'esm' : 'cjs'
          })
          code = compiled.code
          map = compiled.map
        }
        console.log(code)
        return { code, map }
      }
    }

  }
}
