// based on https://github.com/nodejs/node/issues/30810
// and https://github.com/dword-design/suppress-experimental-warnings
// (https://github.com/dword-design/suppress-experimental-warnings/blob/master/LICENSE.md)

const {emit, emitWarning} = process

Object.assign(process, {

  emitWarning: (warning, ...args) => {
    if (typeof warning === 'string') {
      if (warning.includes('experimental-loader')) return
      if (warning.includes('Node.js specifier resolution in ESM is experimental')) return
    }
    return emitWarning(warning, ...args)
  },

  emit: function (...args) {
    if (args[1].name === 'ExperimentalWarning') {
      return undefined
    }
    return emit.call(this, ...args)
  }

})
