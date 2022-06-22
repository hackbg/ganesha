import {
  ganeshaResolve,
  ganeshaResolvePath,
  ganeshaResolvePathExact,
  ganeshaResolvePathFuzzy,
  ganeshaResolvePackage,
  determineModuleFormat,
  makeResolverHelpful,
  ganeshaLoad,
  ganeshaLoadMarkdown,
  ganeshaLoadTypeScript,
  ganeshaLoadData,
  installSourceMapSupport,
  addSourceMap
} from './ganesha-node.mjs'

export default {
  GaneshaNode: {
    async 'resolve' () {
      await ganeshaResolve()
    },
    async 'resolvePath' () {
      await ganeshaResolvePath()
    },
    async 'resolvePathExact' () {
      await ganeshaResolvePathExact()
    },
    async 'resolvePackage' () {
      await ganeshaResolvePackage()
    },
    async 'determineModuleFormat' () {
      await determineModuleFormat()
    },
    async 'makeResolverHelpful' ({ ok }) {
      let resolve = () => {}
      resolve = makeResolverHelpful(resolve)
      ok(resolve.isHelpful)
    },
    async 'load' () {
      await ganeshaLoad()
    },
    async 'loadMarkdown' () {
      await ganeshaLoadMarkdown()
    },
    async 'loadTypeScript' () {
      await ganeshaLoadTypeScript()
    },
    async 'loadData' () {
      await ganeshaLoadData()
    },
    async 'installSourceMapSupport' () {
      await installSourceMapSupport()
    },
    async 'addSourceMap' () {
      await addSourceMap('', '')
    }
  }
}
