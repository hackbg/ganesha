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

import { parentURL } from '../../.fixtures/index.mjs'

const GaneshaNode = {
  async 'resolve' () {
    await ganeshaResolve('../src/node', { parentURL }, ()=>({url:''}))
  },
  async 'resolvePath' () {
    await ganeshaResolvePath('', { parentURL }, ()=>({}))
  },
  async 'resolvePathExact' () {
    await ganeshaResolvePathExact('', { parentURL }, ()=>({}))
  },
  async 'resolvePackage' () {
    await ganeshaResolvePackage('', { parentURL }, ()=>({url:''}))
  },
  async 'determineModuleFormat' () {
    await determineModuleFormat('')
  },
  async 'makeResolverHelpful' ({ ok }) {
    let resolve = () => {}
    resolve = makeResolverHelpful(resolve)
    ok(resolve.isHelpful)
  },
  async 'load' () {
    await ganeshaLoad('', {}, ()=>({}))
  },
  async 'loadMarkdown' () {
    await ganeshaLoadMarkdown('', '', '')
  },
  async 'loadTypeScript' () {
    await ganeshaLoadTypeScript('', '')
  },
  async 'loadData' () {
    await ganeshaLoadData('', '')
  },
  async 'installSourceMapSupport' () {
    await installSourceMapSupport()
  },
  async 'addSourceMap' () {
    await addSourceMap('', '')
  }
}

export default { GaneshaNode }
