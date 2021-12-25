const { fileURLToPath } = require('url')
const { existsSync } = require('fs')
const { extensions, parseString } = require('@hackbg/ganesha-core/parse.cjs')
const { resolve, dirname } = require('path')
const { transformSync } = require('esbuild')

const RE_LITERATE = /\.md$/
const isLiterate  = x => RE_LITERATE.test(x)
const RE_TYPESCRIPT = /\.ts.md$/
const isTypescript  = x => RE_TYPESCRIPT.test(x)
const isWindows = process.platform === "win32"

module.exports = function ganeshaPlugin (typescript = true) {
  return {

    name: 'rollup-plugin-ganesha',

    resolveId (source, importer) {
      const resolved = resolve(dirname(importer), source)
      if (existsSync(resolved)) {
        return resolved
      }
      for (const extension of extensions) {
        const resolved = resolve(dirname(importer), `${source}${extension}`)
        if (existsSync(resolved)) {
          return resolved
        }
      }
      return null
    },

    transform (code, id) {
      if (isLiterate(id)) {
        code = parseString(code)
        let map = null
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
