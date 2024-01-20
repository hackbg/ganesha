import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'
import * as OXCLoader from './pkg/ganesha_oxc.js'

const transformer = new OXCLoader.ModuleTransformer()

const typeScriptExtensions = ['.ts', '.mts', '.cts']

export async function initialize (context) {}

export async function resolve (specifier, context, next) {
  try {
    return await next(specifier, context, next)
  } catch (e) {
    if (specifier.startsWith('./') || specifier.startsWith('../')) {
      const path = fileURLToPath(new URL(specifier, context?.parentURL).href)
      const extension = extname(path).toLowerCase()
      if (!(typeScriptExtensions.includes(extension))) {
        const extended = path + '.ts'
        if (await stat(extended)) {
          return { shortCircuit: true, url: pathToFileURL(extended).href }
        }
      }
    }
    throw e
  }
}

export async function load (url, context, next) {
  if (url.startsWith('file://')) {
    const path = fileURLToPath(url)
    const extension = extname(path).toLowerCase()
    if (typeScriptExtensions.includes(extension)) {
      const source = await readFile(path, 'utf8')
      const config = await readFile(getTsconfig(path).path, 'utf8')
      const transformed = transformer.transform(path, source, config)
      return { format: 'module', shortCircuit: true, source: transformed }
    }
  }
  return await next(url, context, next)
}
