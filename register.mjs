import { register } from 'node:module'
register('./loader.mjs', import.meta.url)
console.log({ register })
