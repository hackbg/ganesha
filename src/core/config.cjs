module.exports.settings = {
  trace:   !!process.env['Ganesha_Trace'],
  hide:    !!process.env['Ganesha_Hide'],
  live:    !!process.env['Ganesha_Live'],
  watched: !!process.env['Ganesha_Watched'],
}

const { readFileSync } = require('fs')
const { parse } = require('jsonc-parser')
const JoyCon = require('joycon')
const joycon = new JoyCon()
const loadSync = file => parse(readFileSync(file, 'utf8'))
joycon.addLoader({ test: /\.json$/, loadSync })
module.exports.joycon = joycon
