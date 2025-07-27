import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import * as OXCLoader from './pkg/ganesha_oxc.js'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'
import { debug, rethrow, TS_EXTENSIONS } from '@ganesha/resolve'
import createCache from '@ganesha/caching'
const cache = await createCache({ name: 'ganesha-oxc' })
let transformer
export async function initialize (context) {
  const wasmPath = fileURLToPath(new URL('pkg/ganesha_oxc_bg.wasm', import.meta.url))
  await OXCLoader.default(await readFile(wasmPath))
  transformer = new OXCLoader.ModuleTransformer()
}
export { resolve } from '@ganesha/resolve'
export async function load (url, context, next) {
  debug('Load:     ', url)
  if (url.startsWith('file://')) {
    const path = fileURLToPath(url)
    const extension = extname(path).toLowerCase()
    if (TS_EXTENSIONS.includes(extension)) {
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
      const transformed = transformer.transform(path, source, config)
      if (!process.env.GANESHA_CACHE_OFF) {
        const key = await cache.put(source, transformed)
        debug('Caching:  ', key)
      }
      return { format: 'module', shortCircuit: true, source: transformed }
    }
  }
  return await next(url, context, next)
}
