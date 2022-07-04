import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

// File URL to this file. Used as `context.parentURL` in tests,
// so that the resolver functions do their thing as if importing from this file.
export const parentURL = pathToFileURL(resolve(fileURLToPath(import.meta.url))).toString()
