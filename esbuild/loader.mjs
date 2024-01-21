import * as esbuild from 'esbuild-wasm'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'

await esbuild.initialize({ wasmURL: './node_modules/esbuild-wasm/esbuild.wasm' })

const typeScriptExtensions = ['.ts', '.mts', '.cts']

export async function initialize (context) {}

export async function resolve (specifier, context, next) {
  if (process.env.GANESHA_DEBUG) {
    console.debug('Resolve:  ', specifier)
  }
  try {
    return await next(specifier, context, next)
  } catch (e) {
    if (specifier.startsWith('./') || specifier.startsWith('../')) {
      const path = fileURLToPath(new URL(specifier, context?.parentURL).href)
      const extension = extname(path).toLowerCase()
      if (!(typeScriptExtensions.includes(extension))) {
        const extended = path + '.ts'
        try {
          if (await stat(extended)) {
            return { shortCircuit: true, url: pathToFileURL(extended).href }
          }
        } catch (e) {
          e.parentURL = context?.parentURL
          throw e
        }
      }
    }
    throw e
  }
}

export async function load (url, context, next) {
  if (process.env.GANESHA_DEBUG) {
    console.debug('Load:     ', url)
  }
  if (url.startsWith('file://')) {
    const path = fileURLToPath(url)
    const extension = extname(path).toLowerCase()
    if (typeScriptExtensions.includes(extension)) {
      if (process.env.GANESHA_DEBUG) {
        console.debug('Transform:', url)
      }
      const source = await readFile(path, 'utf8')
      const config = await readFile(getTsconfig(path).path, 'utf8')
      const { code, warnings, map } = await esbuild.transform(source, {
        sourcefile: path,
        sourcemap: 'both',
        loader: 'ts',
        target: config.target,
        format: 'esm'
      })
      if (warnings && warnings.length > 0) {
        for (const warning of warnings) {
          console.warn(`${warning.location}: ${warning.text}`)
        }
      }
      return { format: 'module', shortCircuit: true, source: code }
    }
  }
  return await next(url, context, next)
}
