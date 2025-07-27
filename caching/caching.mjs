import { stat } from 'node:fs/promises'
import { env, stderr } from 'node:process'
import XDG from '@folder/xdg'
import { mkdirp } from 'mkdirp'
import { xxhash3 } from 'hash-wasm'
import cacache from 'cacache'

const debug = (...args) => env.GANESHA_DEBUG && stderr.write(args.join(' ') + '\n')

/** Create a cache at a given path. If there's already a
 * non-directory there, return a non-cache instead. */
export default async function createCache ({
  name = 'ganesha',
  path = process.env.GANESHA_CACHE_PATH || XDG({ expanded: true, subdir: name }).cache.home
} = {}) {
  // Putting a file in place of the cache directory disables the cache.
  const stats = await stat(path)
  if (!(await stats.isDirectory())) {
    debug('Cache is disabled. To enable, remove', path)
    return makeNullCache()
  }
  return makeRealCache(path)
}

/** Check if the cache path is a directory or non-existent (in which case, create it) */
async function ensureCacheDirectory (path) {
  try {
    // Putting a file in place of the cache directory disables the cache.
    const stats = await stat(path)
    return stats.isDirectory()
  } catch (e) {
    // If the cache directory does not exist, create it.
    if (e.code === 'ENOENT') {
      debug('Creating cache in', path)
      await mkdirp(path)
      return true
    } else {
      throw e
    }
  }
}

/** Stub implementation (non-caching) */
function makeNullCache () {
  return {
    async get (source) {
      return null
    },
    async put (source, output) {
      return null
    }
  }
}

/** Caching implementation. */
function makeRealCache (path) {
  return {
    async get (source) {
      const key = await xxhash3(source)
      try {
        const output = await cacache.get(path, key)
        return {key, output: output.data.toString()}
      } catch (e) {
        if (e.code === 'ENOENT') {
          return null
        }
        throw e
      }
    },
    async put (source, output) {
      const key = await xxhash3(source)
      await cacache.put(path, key, output)
      return key
    }
  }
}
