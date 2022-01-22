const Vite = require('vite')
const $ = (...args) => require('path').resolve(__dirname, ...args)
Vite.build({
  root:       $('vite-worker'),
  configFile: $('vite-worker/vite.config.ts')
})
