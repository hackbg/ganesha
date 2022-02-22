module.exports.trace = (...args) => process.env["Ganesha_Trace"] && console.debug(...args)
