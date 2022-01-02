import { defineConfig } from 'vite'
import ganesha from '@hackbg/rollup-plugin-ganesha'
const isElectron = (process.env.ELECTRON=="true")
export default defineConfig({
  base: isElectron ? './' : "",
  plugins: [ ganesha() ],
  resolve: { alias: [ { find: '@', replacement: '/src' } ] }
})
