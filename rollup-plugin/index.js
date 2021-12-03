const { fileURLToPath } = require('url')
const { parseString } = require('@hackbg/ganesha/parse.cjs')
const { is } = require('@hackbg/ganesha/shared.cjs')

module.exports = function ganeshaPlugin (typescript = true) {
  return {

    name: 'rollup-plugin-ganesha',

    resolveId (source) {
      return null
    },

    transform (code, id) {
      if (is.Literate(id)) {
        code = parseString(code)
        let map = null
        if (is.Typescript(id)){
          const { transformSync } = require('esbuild')
          const compiled = transformSync(code, {
            sourcefile: id,
            sourcemap: 'both',
            loader: 'ts',
            target: 'esnext',
            format: 'esm' //format === 'module' ? 'esm' : 'cjs'
          })
          code = compiled.code
          map  = compiled.map
        }
        return { code, map }
      }
    }

  }
}
