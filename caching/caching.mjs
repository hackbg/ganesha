import XDG from '@folder/xdg'
import { mkdirp } from 'mkdirp'
import { xxhash3 } from 'hash-wasm'
import { stat } from 'node:fs/promises'
import cacache from 'cacache'

const debug = (...args) => process.env.GANESHA_DEBUG &&
  process.stderr.write(args.join(' ') + '\n')

export default async function createCache ({
  path = process.env.GANESHA_CACHE_PATH || XDG({ expanded: true, subdir: 'ganesha-v5' }).cache.home
} = {}) {

  try {
    // Putting a file in place of the cache directory disables the cache.
    const stats = await stat(path)
    if (stats.isFile()) {
      debug('Cache is disabled. To enable, delete', path)
      // Non-caching implementation.
      return {
        async get (source) {
          return null
        },
        async put (source, output) {
          return null
        }
      }
    }
  } catch (e) {
    // If the cache directory does not exist, create it.
    if (e.code === 'ENOENT') {
      debug('Creating cache in', path)
      await mkdirp(path)
    } else {
      throw e
    }
  }

  // Caching implementation.
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
