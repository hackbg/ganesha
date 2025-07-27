import { register } from 'node:module'
register('./esbuild-loader.mjs', { parentURL: import.meta.url })
