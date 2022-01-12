import frontMatter from 'front-matter'
import { readFileSync, existsSync, statSync } from 'fs'
import { pathToFileURL, fileURLToPath } from 'url'

export const baseURL   = pathToFileURL(`${process.cwd()}/`).href
export const isWindows = process.platform === "win32"

export const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
export const isLiterate  = x => RE_LITERATE.test(x)

export const RE_LITERATE_MODULE = /\.(?:ts|js|mjs).md$/
export const isLiterateModule   = x => RE_LITERATE_MODULE.test(x)

export const RE_LITERATE_TYPESCRIPT = /\.ts.md$/
export const RE_MARKDOWN = /\.md$/
export const isLiterateTypeScript = path => {
  if (RE_LITERATE_TYPESCRIPT.test(path)) return true
  if (RE_MARKDOWN.test(path)) {
    return getFMType(fileURLToPath(path)) === 'typescript'
  }
}

export const RE_MD      = /\.md$/
export const isMarkdown = x => RE_MD.test(x)

export const RE_TS        = /\.ts(\.md)?$/
export const isTypescript = x => RE_TS.test(x)

export const FM_TYPES      = ['commonjs', 'ecmascript', 'typescript']
export const isValidFMType = x => FM_TYPES.includes(x)
export const getFMType     = path => frontMatter(readFileSync(path, 'utf8')).attributes.literate

export const isPathImport = x => x[0] === '.' || x.startsWith('file:')

export const extensions = ['.ts.md', '.mjs.md', '.cjs.md', '.js.md', '.ts', '.mjs', '.js', '.cjs', '.md']

export const isDirectory = path => existsSync(path) && statSync(path).isDirectory()

