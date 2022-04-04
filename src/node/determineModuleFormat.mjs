import JSONC from 'jsonc-parser'
import frontMatter from 'front-matter'
import { basename, extname, dirname, resolve as resolvePath } from 'path'
import { readFileSync, existsSync } from 'fs'

export function determineModuleFormat (location) {
  const ext1 = extname(location)
  const ext2 = extname(basename(location, ext1))
  if ('.md' === ext1) {
    if ('.mjs' === ext2) {
      return 'module'
    } else if ('.cjs' === ext2) {
      return 'commonjs'
    } else if (ext2) {
      return digForFormat(location)
    } else {
      const content = readFileSync(location, 'utf8')
      const {attributes} = frontMatter(content)
      if (attributes.literate) {
        if (attributes.literate === 'commonjs') {
          return 'commonjs'
        } else if (attributes.literate === 'ecmascript') {
          return 'module'
          return { format: 'module', url }
        } else {
          return digForFormat(location)
        }
      }
    }
  } else if ('.ts' === ext1 || '.js' === ext1) {
    return digForFormat(location)
  }
}

export function digForFormat (location) {
  while (location !== dirname(location)) {
    location = dirname(location)
    const packageJsonPath = resolvePath(location, 'package.json')
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
      if (packageJson.type === 'module') {
        return 'module'
      }
    }
    const tsconfigJsonPath = resolvePath(location, 'tsconfig.json')
    if (existsSync(tsconfigJsonPath)) {
      const tsconfigJson = JSONC.parse(readFileSync(tsconfigJsonPath, 'utf8'))
      if (tsconfigJson.compilerOptions.target === 'commonjs') {
        return 'commonjs'
      } else {
        return 'module'
      }
    }
  }
  return 'commonjs'
}
