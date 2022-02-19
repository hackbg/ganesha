const {resolve} = require('path')
const spawnSync = require('cross-spawn').sync

function isLegacy () {
  return Number(process.versions.node.split('.')[0]) < 16
}

let loader
let warnings
if (isLegacy()) {
  loader   = require.resolve('@ganesha/node-legacy/loader.mjs'),
  warnings = require.resolve('@ganesha/node-legacy/warning.cjs')
} else {
  loader   = require.resolve('@ganesha/node'),
  warnings = require.resolve('@ganesha/node/warning.cjs')
}

const { watcher } = require('@ganesha/core/live.cjs')

module.exports = { loader, warnings, resolve, spawnSync, isLegacy, watcher }
