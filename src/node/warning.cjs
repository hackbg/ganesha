// based on https://github.com/nodejs/node/issues/30810
const {emitWarning} = process
process.emitWarning = (warning, ...args) => {
  if (typeof warning === 'string' && warning.includes('experimental-loader')) return
  return emitWarning(warning, ...args)
}
