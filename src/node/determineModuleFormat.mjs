import JSONC from 'jsonc-parser'
import frontMatter from 'front-matter'
import { basename, extname, dirname, resolve as resolvePath } from 'path'
import { readFileSync, existsSync } from 'fs'

const MODULE   = 'module'
const COMMONJS = 'commonjs'

const MJS = '.mjs'
const CJS = '.cjs'
const TS  = '.ts'
const JS  = '.js'
const MD  = '.md'

export function determineModuleFormat (location) {
  const ext1 = extname(location)
  if (MJS === ext1) return MODULE
  if (CJS === ext1) return COMMONJS
  const ext2 = extname(basename(location, ext1))
  if (MD === ext1) {
    if (MJS === ext2) return MODULE
    if (CJS === ext2) return COMMONJS
    if (ext2) return digForFormat(location)
    const content = readFileSync(location, 'utf8')
    const {attributes} = frontMatter(content)
    if (attributes.literate) {
      if (attributes.literate === COMMONJS) return COMMONJS
      if (attributes.literate === 'ecmascript') return MODULE
      return digForFormat(location)
    }
  } else if (TS === ext1 || JS === ext1) {
    return digForFormat(location)
  }
}

const PACKAGE_JSON  = 'package.json'
const TSCONFIG_JSON = 'tsconfig.json'
const UTF8          = 'utf8'

export function digForFormat (location) {
  while (location !== dirname(location)) {
    location = dirname(location)
    const packageJsonPath = resolvePath(location, PACKAGE_JSON)
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, UTF8))
      if (packageJson.type === MODULE) return MODULE
    }
    const tsconfigJsonPath = resolvePath(location, TSCONFIG_JSON)
    if (existsSync(tsconfigJsonPath)) {
      const tsconfigJson = JSONC.parse(readFileSync(tsconfigJsonPath, UTF8))
      if (tsconfigJson.compilerOptions.target === COMMONJS) return COMMONJS
      return MODULE
    }
  }
  return COMMONJS
}
