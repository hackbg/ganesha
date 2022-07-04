import { TODO } from '@hackbg/runspec'

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
    throw TODO
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
    throw TODO
    await ganeshaLoadMarkdown('', '', '')
  },
  async 'loadTypeScript' () {
    throw TODO
    await ganeshaLoadTypeScript('', '')
  },
  async 'loadData' () {
    throw TODO
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
