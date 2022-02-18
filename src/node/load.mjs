import { fileURLToPath, pathToFileURL, resolve as resolveURL } from 'url'
import { basename, extname, dirname, resolve as resolvePath } from 'path'
import { readFileSync, existsSync } from 'fs'
import frontMatter from 'front-matter'

import { parseString } from '@ganesha/core/parse.cjs'
import { tscToMjs, esbuildToMjs } from '@ganesha/core/transform.cjs'
import { trace } from '@ganesha/core/trace.cjs'
import { watcher } from '@ganesha/core/live.cjs'

import { determineModuleFormat } from './determineModuleFormat.mjs'

let sourceMapSupportInstalled = false
installSourceMapSupport()

export async function load (
  url, {
    format,
    importAssertions
  }, defaultLoad
) {
  trace(`[load] ${url}`)

  // Pass through non-file imports to the default loader.
  if (!url.startsWith('file://')) {
    return defaultLoad(url, { format, importAssertions }, defaultLoad)
  }

  // Everything else is fair game.
  let source
  let result
  const location = fileURLToPath(url)
  // If live mode is enabled, add this file to the watcher:
  if (watcher) {
    trace('[watch]', location)
    watcher.add(location)
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
      const { id, compiled, map } = tscToMjs(location, source, format)
      addSourceMap(id, map)
      source = compiled
    }
  } else if ('.ts' === ext1) {
    // When loading a TS file, compile it to JS:
    source = readFileSync(location, 'utf8')
    const { id, compiled, map } = tscToMjs(location, source, format)
    addSourceMap(id, map)
    source = compiled
  } else {
    // All other file imports are passed to the default loader.
    return defaultLoad(url, { format, importAssertions }, defaultLoad)
  }
  return { format, source }
}

import sourceMapSupport from 'source-map-support'
const  sourceMaps = {}

export function installSourceMapSupport () {
  if (sourceMapSupportInstalled) return
  sourceMapSupport.install({
    handleUncaughtExceptions: false,
    environment:              'node',
    retrieveSourceMap (url) {
      if (sourceMaps[url]) {
        return { url, map: sourceMaps[url], }
      } else {
        return null
      }
    }
  })
  sourceMapSupportInstalled = true
}

export function addSourceMap (filename, sourceMap, loader) {
  trace(`[addSourceMap] [${loader}] ${filename}`)
  sourceMaps[filename] = sourceMap
}
