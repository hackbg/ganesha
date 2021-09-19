import { URL, pathToFileURL, fileURLToPath } from 'url'
import { transformSync } from 'esbuild'
import fs from 'fs'
import { parseString } from './parse.cjs'
import frontMatter from 'front-matter'

const trace = (...args) => { /* console.debug(args) */ }

const baseURL   = pathToFileURL(`${process.cwd()}/`).href
    , isWindows = process.platform === "win32"

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
    , isLiterate  = x => RE_LITERATE.test(x)

const RE_LITERATE_MODULE = /\.(?:ts|js|mjs).md$/
    , isLiterateModule   = x => RE_LITERATE_MODULE.test(x)

const RE_MD      = /\.md$/
    , isMarkdown = x => RE_MD.test(x)

const RE_TS        = /\.ts(\.md)?$/
    , isTypescript = x => RE_TS.test(x)

const FM_TYPES  = ['commonjs', 'ecmascript', 'typescript']
    , getFMType = path => frontMatter(fs.readFileSync(path, 'utf8')).attributes.literate

/// ## Resolve module URL
/// https://nodejs.org/api/esm.html#esm_resolve_specifier_context_defaultresolve

export function resolve (specifier, context, defaultResolve) {

  trace('1.resolve', specifier, isLiterate(specifier), isMarkdown(specifier))

  const { parentURL = baseURL } = context
  let url  = new URL(specifier, parentURL).href
    , path = fileURLToPath(url)

  /// Literate modules can be identified by their extension:

  if (isLiterate(specifier)) {
    return { url } }

  /// Or, they can be stored in regular Markdown files
  /// and identified as literate by their front matter.

  if (isMarkdown(specifier) && FM_TYPES.includes(getFMType(path))) {
    return { url } }

  /// Let Node.js handle all other specifiers.

  return defaultResolve(specifier, context, defaultResolve) }

/// ## Interpret module URL
/// https://nodejs.org/api/esm.html#esm_getformat_url_context_defaultgetformat

export function getFormat (url, context, defaultGetFormat) {

  trace('2.getFormat', url, context)

  if (isLiterateModule(url)) {
    return { format: 'module' } } 

  if (isLiterate(url)) {
    return { format: 'commonjs' } }

  const fmType = getFMType(fileURLToPath(url))

  if (isMarkdown(url) && FM_TYPES.includes(fmType)) {
    if (fmType === 'commonjs') {
      return { format: 'commonjs' } }
    else {
      return { format: 'module' } } }

  // Let Node.js handle all other URLs.
  return defaultGetFormat(url, context, defaultGetFormat) }

/// ## Load module source
/// https://nodejs.org/api/esm.html#esm_getsource_url_context_defaultgetsource

export function getSource (url, context, defaultGetSource) {
  trace('3.getSource', url, context)
  return defaultGetSource(url, context, defaultGetSource)}

/// ## Extract code from Markdown and optionally transpile TypeScript
/// https://nodejs.org/api/esm.html#esm_transformsource_source_context_defaulttransformsource

export function transformSource (src, context, defaultTransformSource) {
  const { url, format } = context
  trace('4.transformSource', context)

  /// Convert Markdown with embedded code blocks
  /// to code with embedded Markdown comments

  if (isMarkdown(url)) {
    return { source: parseString(src.toString()) } }

  /// Transpile TypeScript

  if (isTypescript(url)) {
    const { code: source, warnings, map: jsSourceMap } = transformSync(
      src.toString(), {
        sourcefile: isWindows ? url : fileURLToPath(url),
        sourcemap: 'both',
        loader: 'ts',
        target: 'esnext',
        format: format === 'module' ? 'esm' : 'cjs' })

    /// Print TypeScript errors

    if (warnings && warnings.length > 0) {
      for (const warning of warnings) {
        trace(warning.location)
        trace(warning.text) } }

    return { source } }

  // Let Node.js handle all other sources.
  return defaultTransformSource(source, context, defaultTransformSource) }
