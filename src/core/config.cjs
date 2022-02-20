const { readFileSync } = require('fs')
const { parse } = require('jsonc-parser')
const JoyCon = require('joycon')
const joycon = new JoyCon()
const loadSync = file => parse(readFileSync(file, 'utf8'))
joycon.addLoader({ test: /\.json$/, loadSync })
module.exports = joycon
