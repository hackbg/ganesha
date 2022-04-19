import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { basename, extname, dirname, resolve as resolvePath, relative } from 'path'
import { readFileSync, existsSync, realpathSync } from 'fs'
import frontMatter from 'front-matter'

import { parseString } from '@ganesha/core/parse.cjs'
import { tscToMjs, esbuildToMjs } from '@ganesha/core/transform.cjs'
import { trace as _trace } from '@ganesha/core/trace.cjs'

import { determineModuleFormat } from './determineModuleFormat.mjs'
import { installSourceMapSupport, addSourceMap } from './sourcemaps.mjs'

installSourceMapSupport()

export async function load (
  url, {
    format,
    importAssertions
  }, defaultLoad
) {
  const trace = (...args) => _trace('  LOAD', url, ...args)
  trace()

  // Non-file imports (such as built-in modules)
  // are passed to the default loader.
  if (!url.startsWith('file://')) {
    return defaultLoad(url, { format, importAssertions }, defaultLoad)
  }

  // Everything else is fair game.
  let source
  let result
  const location = realpathSync(fileURLToPath(url))

  // If live mode is enabled, add this file to the watcher:
  if (process.send) {
    process.send({"Ganesha_Watch": location})
  }

  // Count extensions from the back: `name.ext2.ext1`
  const ext1 = extname(location)
  const ext2 = extname(basename(url, ext1))
  if ('.md' === ext1) {
    // When loading a Markdown file, extract the code from it:
    source = readFileSync(location, 'utf8')
    const {attributes} = frontMatter(source)
    source = parseString(source)
    if ('.ts' === ext2 || attributes.literate === 'typescript') {
      // And if the code in the Markdown file is TS, compile it to JS:
      const transformed = tscToMjs(location, source, format)
      const { id, compiled, map } = transformed
      addSourceMap(id, map)
      source = compiled
    }
  } else if ('.ts' === ext1) {
    // When loading a TS file, compile it to JS:
    source = readFileSync(location, 'utf8')
    const transformed = tscToMjs(location, source, format)
    const { id, compiled, map } = transformed
    addSourceMap(id, map)
    source = compiled
  } else {
    if (format) {
      // Imports with known formats are passed to the default loader.
      return await defaultLoad(url, { format, importAssertions }, defaultLoad)
    } else {
      // Imports with other (unknown) formats are handled as data
      format = 'module'
      source = readFileSync(location, 'utf8')
      if ('.json' !== ext1) {
        // If it's not JSON the data is quoted as a string
        source = '`' + source + '`'
      }
      source = `export default ${source}`
    }
  }

  return { format, source }
}
