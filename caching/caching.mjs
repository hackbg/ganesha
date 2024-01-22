import XDG from '@folder/xdg'
import { mkdirp } from 'mkdirp'
import { xxhash3 } from 'hash-wasm'
import { stat } from 'node:fs/promises'
import cacache from 'cacache'

export default async function createCache ({
  path = XDG({ expanded: true, subdir: 'ganesha-v5' }).cache.home
} = {}) {

  try {
    // Putting a file in place of the cache directory disables the cache.
    const stats = await stat(path)
    if (stats.isFile()) {
      console.log('Cache is disabled. To enable, delete', path)
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
      console.log('Creating', path)
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
        return await cacache.get(path, key)
      } catch (e) {
        if (e.code === 'ENOENT') {
          return null
        }
        throw e
      }
    },
    async put (source, output) {
      const key = await xxhash3(source)
      const integrity = `xxhash3-${xxhash3(output)}`
      return await cacache.put(path, key, output, { integrity })
    }
  }

}
