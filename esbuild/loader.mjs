import * as esbuild from 'esbuild'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'
import createCache from '@ganesha/caching'

const debug = (...args) => process.env.GANESHA_DEBUG &&
  process.stderr.write(args.join(' ') + '\n')

const typeScriptExtensions = ['.ts', '.mts', '.cts']

const cache = await createCache()

export async function initialize (context) {}

export async function resolve (specifier, context, next) {
  debug('Resolve:  ', specifier)
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
  debug('Load:     ', url)
  if (url.startsWith('file://')) {
    const path = fileURLToPath(url)
    const extension = extname(path).toLowerCase()
    if (typeScriptExtensions.includes(extension)) {
      debug('Transform:', url)
      const source = await readFile(path, 'utf8')
      if (!process.env.GANESHA_CACHE_OFF) {
        const cached = await cache.get(source)
        if (cached) {
          debug('Cached:   ', cached.key)
          return { format: 'module', shortCircuit: true, source: cached.output }
        }
      }
      let tsconfig
      try {
        tsconfig = getTsconfig(path).path
      } catch (e) {
        e.path = path
        throw e
      }
      debug('TSConfig: ', tsconfig)
      const config = await readFile(tsconfig, 'utf8')
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
      if (!process.env.GANESHA_CACHE_OFF) {
        const key = await cache.put(source, code)
        debug('Caching:  ', key)
      }
      return { format: 'module', shortCircuit: true, source: code }
    }
  }
  return await next(url, context, next)
}
