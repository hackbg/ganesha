import { fileURLToPath } from 'node:url'
import { extname } from 'node:path'
import { readFile } from 'node:fs/promises'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'
import * as OXCLoader from './pkg/ganesha_oxc.js'

const transformer = new OXCLoader.ModuleTransformer()

const typeScriptExtensions = ['.ts', '.mts', '.cts']

export async function initialize (context) {}

export async function resolve (specifier, context, next) {
  return next(specifier, context, next)
}

export async function load (url, context, next) {
  const path = fileURLToPath(url)
  if (typeScriptExtensions.includes(extname(path).toLowerCase())) {
    const source = await readFile(path, 'utf8')
    const config = await readFile(getTsconfig(path).path, 'utf8')
    const transformed = transformer.transform(path, source, config)
    return { format: 'module', shortCircuit: true, source: transformed }
  } else {
    return next(url, context, next)
  }
}
