const { fileURLToPath } = require('url')
const { parseString } = require('@hackbg/ganesha/parse.cjs')
const { is, FM_TYPES, getFM } = require('@hackbg/ganesha/shared.cjs')

module.exports = function ganeshaPlugin (typescript = true) {
  return {

    name: 'rollup-plugin-ganesha',

    enforce: 'pre',

    resolveId (source) {
      return null
    },

    transform (code, id) {

      let literate = false

      if (is.Literate(id)) {
        literate = true
      } else if (is.Markdown(id)) {
        try {
          if (FM_TYPES.includes(getFM(code).attributes.literate)) {
            literate = true
          }
        } catch (e) {
          /**/
        }
      }

      if (literate) {
        code = parseString(code)
        let map = null
        //if (is.Typescript(id)) {
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
        //}
        return { code, map }
      }

    }

  }
}
