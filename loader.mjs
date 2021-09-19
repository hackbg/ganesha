import { URL, pathToFileURL, fileURLToPath } from 'url'
import { transformSync } from 'esbuild'
import fs from 'fs'
import { parseString } from './parse.cjs'

const baseURL = pathToFileURL(`${process.cwd()}/`).href
const isWindows = process.platform === "win32"

const RE_LITERATE        = /\.(?:ts|js|cjs|mjs).md$/
    , isLiterate         = x => RE_LITERATE.test(x)
    , RE_LITERATE_MODULE = /\.(?:ts|js|mjs).md$/
    , isLiterateModule   = x => RE_LITERATE_MODULE.test(x)
    , RE_MD              = /\.md$/
    , isMarkdown         = x => RE_MD.test(x)
    , RE_TS              = /\.ts(\.md)?$/
    , isTypescript       = x => RE_TS.test(x)
    , RE_EXCLUDE         = /^\w+:/
    , isExcluded         = x => RE_EXCLUDE||false //TODO

export function resolve (specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context
  if (isLiterate) {
    const url = new URL(specifier, parentURL).href
    return { url } }
  // ignore `data:` and `node:` prefix etc.
  if (!isExcluded(specifier)) {
    // Try to resolve extension
    for (const ext of ['.ts', '.mjs', '.js', '.cjs', '.md']) {
      let url = new URL(specifier + ext, parentURL).href
      console.log('  ', url)
      const path = fileURLToPath(url)
      if (fs.existsSync(path)) return { url } } }
  // Let Node.js handle all other specifiers.
  return defaultResolve(specifier, context, defaultResolve) }

export function getFormat (url, context, defaultGetFormat) {
  if (RE_LITERATE_MODULE.test(url)) return { format: 'module' }
  // Let Node.js handle all other URLs.
  return defaultGetFormat(url, context, defaultGetFormat) }

export function transformSource (source, context, defaultTransformSource) {
  const { url, format } = context
  if (RE_MD.test(url)) {
    source = parseString(source.toString()) }
  if (RE_TS.test(url)) {
    const { code: js, warnings, map: jsSourceMap } = transformSync(
      source.toString(), {
        sourcefile: isWindows ? url : fileURLToPath(url),
        sourcemap: 'both',
        loader: 'ts',
        target: 'esnext',
        format: format === 'module' ? 'esm' : 'cjs' })
    if (warnings && warnings.length > 0) {
      for (const warning of warnings) {
        console.log(warning.location)
        console.log(warning.text) } }
    return { source: js } }
  // Let Node.js handle all other sources.
  return defaultTransformSource(source, context, defaultTransformSource) }
