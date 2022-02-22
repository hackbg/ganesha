const { trace } = require('./config.cjs').settings
module.exports.trace = (...args) => trace && console.debug(...args)
