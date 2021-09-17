import { URL, pathToFileURL, fileURLToPath } from 'url'
import { transformSync } from 'esbuild'
import fs from 'fs'
import { parseString } from './parse.cjs'

const baseURL = pathToFileURL(`${process.cwd()}/`).href
const isWindows = process.platform === "win32"

const RE_LITERATE = /\.(?:ts|js|cjs|mjs).md$/
const RE_LITERATE_MODULE = /\.(?:ts|js|mjs).md$/
const RE_MD = /\.md$/
const RE_TS = /\.ts$/
const excludeRegex = /^\w+:/

export function resolve (specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context
  if (RE_LITERATE.test(specifier)) {
    const url = new URL(specifier, parentURL).href
    return { url } }
  // ignore `data:` and `node:` prefix etc.
  if (!excludeRegex.test(specifier)) {
    // Try to resolve `.ts` extension
    let url = new URL(specifier + '.ts', parentURL).href
    const path = fileURLToPath(url)
    if (fs.existsSync(path)) return { url } }
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
    const filename = isWindows ? url : fileURLToPath(url)
        , options = {
            sourcefile: filename,
            sourcemap: 'both',
            loader: 'ts',
            target: 'esnext',
            format: format === 'module' ? 'esm' : 'cjs', }
        , { code: js,
            warnings,
            map: jsSourceMap } = transformSync(source.toString(), options)
    if (warnings && warnings.length > 0) {
      for (const warning of warnings) {
        console.log(warning.location)
        console.log(warning.text) } }
    return { source: js, } }
  // Let Node.js handle all other sources.
  return defaultTransformSource(source, context, defaultTransformSource) }
