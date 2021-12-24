const { fileURLToPath } = require('url')
const { existsSync } = require('fs')
const { parseString } = require('@hackbg/ganesha-core/parse.cjs')
const { resolve, dirname } = require('path')

const RE_LITERATE = /\.md$/
const isLiterate  = x => RE_LITERATE.test(x)
const RE_TYPESCRIPT = /\.ts.md$/
const isTypescript  = x => RE_TYPESCRIPT.test(x)
const isWindows = process.platform === "win32"

module.exports = function ganeshaPlugin (typescript = true) {
  return {

    name: 'rollup-plugin-ganesha',

    resolveId (source, importer) {
      console.log('resolveId', source, importer)
      const tsMd = resolve(dirname(importer), `${source}.ts.md`)
      if (existsSync(tsMd)) {
        return tsMd
      }
      const md = resolve(dirname(importer), `${source}.md`)
      if (existsSync(md)) {
        return md
      }
      return null
    },

    transform (code, id) {
      if (isLiterate(id)) {
        code = parseString(code)
        let map = null
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
        return { code, map }
      }
    }

  }
}
