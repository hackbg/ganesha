#!/usr/bin/env node
import spawn from 'cross-spawn'
const spawnSync = spawn.sync
const argv = process.argv.slice(2)
process.exit(spawnSync(
  'node',
  ['--experimental-loader', './loader.mjs', ...argv],
  { stdio: 'inherit' }).status)
