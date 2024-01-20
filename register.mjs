import { register } from 'node:module'
register('./loader.mjs', {
  parentURL: import.meta.url
})
