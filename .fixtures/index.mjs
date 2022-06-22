import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

export const parentURL = pathToFileURL(resolve(dirname(fileURLToPath(import.meta.url)))).toString()
