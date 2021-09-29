import { parseString } from '@hackbg/ganesha/parse.cjs'

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
    , isLiterate  = x => RE_LITERATE.test(x)

export default function ganeshaPlugin () {
  return {
    name: 'rollup-plugin-ganesha',
    transform (src, id) {
      if (isLiterate(id)) return {
        code: parseString(src),
        map:  null
      }
    }
  }
}
