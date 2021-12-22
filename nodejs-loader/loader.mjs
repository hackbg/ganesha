import { URL, pathToFileURL, fileURLToPath } from 'url'
import { readFileSync, existsSync, statSync } from 'fs'
import { resolve as resolvePath, dirname } from 'path'
import { transformSync } from 'esbuild'
import { parseString } from './parse.cjs'
import frontMatter from 'front-matter'
import sourceMapSupport from 'source-map-support'

const sourceMaps = {}
;(function installSourceMapSupport() {
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment: 'node',
    retrieveSourceMap(url) {
      if (sourceMaps[url]) return { url, map: sourceMaps[url] }
      return null } }) })()

const trace = (...args) => process.env.LITERATE_DEBUG && console.debug(...args)

const baseURL   = pathToFileURL(`${process.cwd()}/`).href
    , isWindows = process.platform === "win32"

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
    , isLiterate  = x => RE_LITERATE.test(x)

const RE_LITERATE_MODULE = /\.(?:ts|js|mjs).md$/
    , isLiterateModule   = x => RE_LITERATE_MODULE.test(x)

const RE_LITERATE_TYPESCRIPT = /\.ts.md$/
    , isLiterateTypeScript   = x => RE_LITERATE_TYPESCRIPT.test(x)

const RE_MD      = /\.md$/
    , isMarkdown = x => RE_MD.test(x)

const RE_TS        = /\.ts(\.md)?$/
    , isTypescript = x => RE_TS.test(x)

const FM_TYPES  = ['commonjs', 'ecmascript', 'typescript']
    , getFMType = path => frontMatter(readFileSync(path, 'utf8')).attributes.literate

const isPathImport = x => x[0] === '.' || x.startsWith('file:')

const extensions = ['.ts', '.mjs', '.js', '.cjs']

const isDirectory = path => existsSync(path) && statSync(path).isDirectory()

/// ## Resolve module URL
/// https://nodejs.org/api/esm.html#esm_resolve_specifier_context_defaultresolve

export function resolve (specifier, context = {}, defaultResolve) {

  /// Determine parent URL (URL of importing module).
  /// Make sure there's a trailing slash, otherwise
  /// relative imports would be resolved to the wrong dir.

  let { parentURL = baseURL } = context

  if (parentURL.startsWith('SyntaxError')) {
    throw new SyntaxError(parentURL.slice(13)) }

  trace('1.resolve', specifier, isLiterate(specifier), isMarkdown(specifier), 'FROM', parentURL)
  if (isDirectory(fileURLToPath(parentURL)) && !parentURL.endsWith('/')) {
    parentURL = `${parentURL}/` }

  let url  = new URL(specifier, parentURL).href
    , path = fileURLToPath(url)

  /// Literate modules can be identified by their extension:

  if (isLiterate(specifier)) {
    return { url } }

  /// Or, they can be stored in regular Markdown files
  /// and identified as literate by their front matter.

  if (isMarkdown(specifier) && FM_TYPES.includes(getFMType(path))) {
    return { url } }

  if (isPathImport(specifier)) {
    const url = new URL(specifier, parentURL).href
    const path = fileURLToPath(url)
    /// Try the verbatim module name but not if it's a directory
    if (existsSync(path) && !isDirectory(path)) return { url }
    /// Try the module name with different extensions
    for (const extension of extensions) {
      const url = new URL(specifier + extension, parentURL).href
      trace('trying', url)
      if (existsSync(fileURLToPath(url))) {
        return { url } } }
    /// Try the directory
    if (existsSync(path)) return { url } }
  else {
    // Honor TypeScript path overrides
    const tsconfigPath = resolvePath(dirname(fileURLToPath(parentURL)), 'tsconfig.json')
    if (existsSync(tsconfigPath)) {
      const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'))
      const { compilerOptions: { paths = {} } = {} } = tsconfig
      if (paths[specifier]) {
        for (const path of paths[specifier]) {
          const resolvedPath = resolvePath(dirname(fileURLToPath(parentURL)), path)
          if (existsSync(resolvedPath)) {
            return { url: pathToFileURL(resolvedPath).href } } } } } }

  /// Let Node.js handle all other specifiers.

  return defaultResolve(specifier, context, defaultResolve)
}

/// ## Interpret module URL
/// https://nodejs.org/api/esm.html#esm_getformat_url_context_defaultgetformat

export function getFormat (url, context, defaultGetFormat) {
  trace('2.getFormat', url, context)

  if (!url.startsWith('node:')) {
    const path = fileURLToPath(url)

    if (isLiterateModule(url)) {
      return { format: 'module' } }

    if (isLiterate(url)) {
      return { format: 'commonjs' } }

    if (url.startsWith('file://')) {
      if (isMarkdown(url)) {
        const fmType = getFMType(path)
        if (FM_TYPES.includes(fmType)) {
          if (fmType === 'commonjs') {
            return { format: 'commonjs' } }
          else {
            return { format: 'module' } } } } }

    if (isTypescript(url)) {
      return { format: 'module' } }

    if (isDirectory(path)) {
      const packageJSONPath = resolvePath(path, 'package.json')
      if (existsSync(packageJSONPath)) {
        const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
        if (packageJSON.type === 'module') {
          return { format: 'module' } }
        else {
          return { format: 'commonjs' } } }
      else {
        throw new Error(`@hackbg/ganesha: unsupported directory import: ${url}`) } } }

  // Let Node.js handle all other URLs.
  return defaultGetFormat(url, context, defaultGetFormat)
}

/// ## Load module source
/// https://nodejs.org/api/esm.html#esm_getsource_url_context_defaultgetsource

export function getSource (url, context, defaultGetSource) {
  trace('3.getSource', url, context)

  const path = fileURLToPath(url)
  if (isDirectory(path)) {
    const packageJSONPath = resolvePath(path, 'package.json')
    if (existsSync(packageJSONPath)) {
      const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
      if (packageJSON.main) {
        url = pathToFileURL(resolvePath(path, packageJSON.main)) } } }

  return defaultGetSource(url, context, defaultGetSource)
}

/// ## Extract code from Markdown and optionally transpile TypeScript
/// https://nodejs.org/api/esm.html#esm_transformsource_source_context_defaulttransformsource

export function transformSource (src, context, defaultTransformSource) {
  trace('4.transformSource', context.format, context.url)

  /// Transpile TypeScript

  if (isLiterateTypeScript(context.url)) {
    return { source: transformTypeScript(parseString(src.toString()), context) } }
  if (isTypescript(context.url)) {
    return { source: transformTypeScript(src.toString(), context) } }

  /// Convert Markdown with embedded code blocks
  /// to code with embedded Markdown comments

  if (isMarkdown(context.url)) {
    return { source: parseString(src.toString()) } }

  // Let Node.js handle all other sources.

  return defaultTransformSource(src, context, defaultTransformSource)
}

export function transformTypeScript (source, context) {

  trace('5.transformTS', context.url)

  const { url, format } = context

  const { code, warnings, map: sourceMap } = transformSync(
    source, {
      sourcefile: isWindows ? url : fileURLToPath(url),
      sourcemap: 'both',
      loader: 'ts',
      target: 'esnext',
      format: format === 'module' ? 'esm' : 'cjs' })

  sourceMaps[url] = sourceMap

  /// Print TypeScript errors

  if (warnings && warnings.length > 0) {
    for (const warning of warnings) {
      console.log(warning.location)
      console.log(warning.text) } }

  return code
}