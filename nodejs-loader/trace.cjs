module.exports.trace = (...args) => process.env.LITERATE_DEBUG && console.debug(...args)
