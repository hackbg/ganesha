module.exports.trace = (...args) => process.env["Ganesha.Trace"] && console.debug(...args)
