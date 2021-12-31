/** Patch the Node CJS loader to suppress the ESM error
  * https://github.com/nodejs/node/blob/069b5df/lib/internal/modules/cjs/loader.js#L1125
  * As per https://github.com/standard-things/esm/issues/868#issuecomment-594480715 */
function patchCommonJsLoader (compile) {
  const extensions = Module._extensions
  const jsHandler = extensions['.js']
  extensions['.js']     =
  extensions['.js.md']  =
  extensions['.cjs.md'] =
  extensions['.mjs.md'] =
  function (module, filename) {
    try { return jsHandler.call(this, module, filename) } catch (error) {
      if (error.code !== 'ERR_REQUIRE_ESM') throw error
      let content = readFileSync(filename, 'utf8')
      content = compile(content, filename, 'cjs')
      module._compile(content, filename)
    }
  }
}
