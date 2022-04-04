const { trace } = require('./config.cjs').settings
const T0 = + new Date()
module.exports.trace = (...args) => {
  if (!trace) return
  const dT = 'T+'+(Number(+ new Date() - T0)/1000).toFixed(3)
  console.debug(dT, ...args)
}
