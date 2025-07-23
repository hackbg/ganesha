import * as esbuild from 'esbuild-wasm'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import { getTsconfig, parseTsconfig } from 'get-tsconfig'
import createCache from '@ganesha/caching'

const debug = (...args) => process.env.GANESHA_DEBUG &&
  process.stderr.write(args.join(' ') + '\n')

await esbuild.initialize()

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
        const [asFile, asDir] = [`${path}.ts`, `${path}/index.ts`]
        const notFound = e => { if (e.code ==='ENOENT') return false; throw e }
        let isFile, isDir
        try {
          [isFile, isDir] = await Promise.all([
            stat(asFile).then(stat=>stat.isFile()).catch(notFound),
            stat(asDir).then(stat=>stat.isFile()).catch(notFound),
          ])
        } catch (e) {
          throw Object.assign(e, { parentURL: context?.parentURL })
        }
        if (isFile && isDir) {
          throw Object.assign(new Error(`Ambiguous import: "${path}"\n is "${asFile}"\n or "${asDir}"?`), {
            path, asFile, asDir, specifier, parentURL: context?.parentURL
          })
        }
        if (isFile) {
          return { shortCircuit: true, url: pathToFileURL(asFile).href }
        }
        if (isDir) {
          return { shortCircuit: true, url: pathToFileURL(asDir).href }
        }
        throw Object.assign(new Error(`Not found: "${path}"\n at "${asFile}"\n or "${asDir}"?`), {
          path, asFile, asDir, specifier, parentURL: context?.parentURL
        })
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
