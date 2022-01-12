const { readFileSync } = require('fs')
const { parse }        = require('jsonc-parser')
const JoyCon           = require('joycon')

const joycon = new JoyCon()

joycon.addLoader({
  test: /\.json$/,
  loadSync: file => parse(readFileSync(file, 'utf8'))
})

module.exports = joycon
