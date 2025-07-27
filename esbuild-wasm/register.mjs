import { register } from 'node:module'
register('./esbuild-wasm-loader.mjs', { parentURL: import.meta.url })
