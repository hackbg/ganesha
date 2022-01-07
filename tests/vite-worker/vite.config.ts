import { defineConfig } from 'vite'
import ganesha from '@ganesha/rollup-plugin'
const isElectron = (process.env.ELECTRON=="true")
export default defineConfig({
  base: isElectron ? './' : "",
  plugins: [ ganesha() ],
  resolve: { alias: [ { find: '@', replacement: '/src' } ] }
})
