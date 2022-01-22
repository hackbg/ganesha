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

/** Extract the top-level "literate" key from the YAML front matter of a Markdown file. */
export const getFMType     = path => frontMatter(readFileSync(path, 'utf8')).attributes.literate
/** Accepted values for the "literate" key */
export const FM_TYPES      = ['commonjs', 'ecmascript', 'typescript']
/** Check if the extracted of "literate" is among the accepted ones. */
export const isValidFMType = x => FM_TYPES.includes(x)

export const isPathImport = x =>
  x[0] === '.' || x.startsWith('file:')

/** Matches an import specifier pointing to a path
  * inside a namespaced node module,
  * e.g. "@foo/bar/baz" => [ "@foo/bar", "baz" ] */
export const RE_SUB_NS = /^(@.+?\/.+?)\/+(.+)/

/** Matches an import specifier pointing to a path
  * inside a non-namespaced node module.
  * e.g. "foo/bar/baz"  => [ "foo", "bar/baz" ] */
export const RE_SUB    = /^([^@].+?)\/+(.+)/

/** Parses an import specifier pointing to a path
  * inside a node module.
  * e.g. "@foo/bar/baz" => { module: "@foo/bar", path: "baz" }
  *      "foo/bar/baz"  => { module: "foo", path: "/bar/baz" } */
export const parseNodeModuleImport = specifier => {
  const reSubNsMatches = RE_SUB_NS.exec(specifier)
  if (reSubNsMatches) return {
    module: reSubNsMatches[1],
    path:   reSubNsMatches[2]
  }
  const reSubMatches = RE_SUB.exec(specifier)
  if (reSubMatches) return {
    module: reSubMatches[1],
    path:   reSubMatches[2]
  }
  return {
    module: false,
    path:   false
  }
}

const RE_NOT_FOUND_PACKAGE = /Cannot find package '(.+)'/

export const getNotFoundPackage = (message) => {
  const reNotFoundMatches = RE_NOT_FOUND_PACKAGE.exec(message)
  if (reNotFoundMatches) {
    return reNotFoundMatches[1]
  }
}

export const extensions = [
  '.ts.md', '.mjs.md', '.cjs.md', '.js.md',
  '.ts', '.mjs', '.js', '.cjs',
  '.md'
]

/* Checks if the provided path exists and is a directory. */
export const isDirectory = path =>
  existsSync(path) && statSync(path).isDirectory()
