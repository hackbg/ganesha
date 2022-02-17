const {resolve} = require('path')
const spawnSync = require('cross-spawn').sync

let loader
let warnings
if (Number(process.versions.node.split('.')[0]) < 16) {
  loader   = require.resolve('@ganesha/node-legacy/loader.mjs'),
  warnings = require.resolve('@ganesha/node-legacy/warning.cjs')
} else {
  loader   = require.resolve('@ganesha/node'),
  warnings = require.resolve('@ganesha/node/warning.cjs')
}

module.exports = { loader, warnings, resolve, spawnSync }
