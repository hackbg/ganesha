import * as OXCLoader from './pkg/ganesha_oxc.js'
import { fileURLToPath } from 'node:url'
import { extname } from 'node:path'

const transformer = new OXCLoader.ModuleTransformer()

const extensions = ['.ts', '.mts', '.cts']

export async function initialize (context) {
  console.log({ context, transformer })
}

export async function resolve (specifier, context, next) {
  console.log({specifier, context, next})
  return next(specifier, context, next)
}

export async function load (url, context, next) {
  const path = fileURLToPath(url)
  const ext = extname(path)
  if (typescriptExtensions.includes(extname(path))) {
    return {
      format: 'module',
      shortCircuit: true,
      source: transformer.transform(
        path,
        source,
      )
    }
  } else {
    return next(url, context, next)
  }
}
