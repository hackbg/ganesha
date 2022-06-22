export const PREFIXES = {
  FILE_URL: 'file://',
  RELATIVE_PATH: '.'
}

export const EXTENSIONS = {
  MJS:  '.mjs',
  CJS:  '.cjs',
  TS:   '.ts',
  JS:   '.js',
  JSON: '.json',
  MD:   '.md'
}

export const EXTENSION_ORDER = [
  '.ts.md',
  '.mjs.md',
  '.cjs.md',
  '.js.md',
  '.ts',
  '.mjs',
  '.js',
  '.cjs',
  '.md'
]

export const FORMATS = {
  MODULE:   'module',
  COMMONJS: 'commonjs'
}

export const LITERATE = {
  COMMONJS:   'commonjs',
  MODULE:     'module',
  ECMASCRIPT: 'ecmascript',
  TYPESCRIPT: 'typescript',
}

export const FILES = {
  PACKAGE_JSON:  'package.json',
  TSCONFIG_JSON: 'tsconfig.json'
}

export const RE = {
  MARKDOWN:            /\.md$/,
  TYPESCRIPT:          /\.ts(\.md)?$/,
  LITERATE:            /\.(?:ts|js|cjs|mjs).md$/,
  LITERATE_MODULE:     /\.(?:ts|js|mjs).md$/,
  LITERATE_TYPESCRIPT: /\.ts.md$/,

  CANNOT_FIND_MODULE:  /Cannot find module '(.+)'/,
  CANNOT_FIND_PACKAGE: /Cannot find package '(.+)'/,

  /** Matches an import specifier pointing to a path
    * inside a non-namespaced node module.
    * e.g. "foo/bar/baz":> [ "foo", "bar/baz" ] */
  SUB:    /^([^@].+?)\/+(.+)/,
  /** Matches an import specifier pointing to a path
    * inside a namespaced node module,
    * e.g. "@foo/bar/baz":> [ "@foo/bar", "baz" ] */
  SUB_NS: /^(@.+?\/.+?)\/+(.+)/,

  FILE_FROM_MODULE:    new RegExp("^[^@]([^/]+)/(.+)"),
  FILE_FROM_MODULE_NS: new RegExp("^(@[^/]+/[^/]+)/(.+)"),
}

export const ERR = {
  E01 (parentURL, url) {
    return new Error(
      `[@ganesha/node]: resolution failed: import '${url}' (from ${parentURL})`
    )
  },
  E02 () {
    return new Error('tried to import something that is neither file nor directory')
  },
  E03 (resolvedPath, fulfilled) {
    return new Error(
      `[@ganesha/node] Ambiguous import "${resolvedPath}"\n`
      + `Could be one of the following:\n`
      + fulfilled.map(x=>x.value).join('\n')
    )
  },
  E04 (url, parentURL) {
    throw new Error(
      `[@ganesha/node] Failed to resolve import:\n  "${url}" (from ${parentURL})`
      + `\nTried the following paths:\n  `
      + variants.join('\n  ')
    )
  }
}

export const UTF8 = 'utf8'
