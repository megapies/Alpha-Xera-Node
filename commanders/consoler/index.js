const fs = require('fs')
const path = require('path')

const consolers = {}
fs.readdirSync(__dirname)
  .filter(file => (file != 'index.js' && /.js$/.test(file)))
  .forEach((file) => {
    console.log('regis consoler', file)
    const { consoler, command } = require('./' + file)
    console.log(consoler)
    consolers[command] = consoler
  })

module.exports = consolers