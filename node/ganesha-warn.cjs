// based on https://github.com/nodejs/node/issues/30810
const {emitWarning} = process
process.emitWarning = (warning, ...args) => {
  if (typeof warning === 'string') {
    if (warning.includes('experimental-loader')) return
    if (warning.includes('Node.js specifier resolution in ESM is experimental')) return
  }
  return emitWarning(warning, ...args)
}
