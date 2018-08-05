const fs = require('fs')
const path = require('path')

const consolers = [];
fs.readdirSync(__dirname)
  .filter(file => (file != 'index.js'))
  .forEach((file) => {
    console.log('regis consoler', file)
    const { consoler } = require('./' + file)
    console.log(consoler)
    consolers.push(consoler)
  })

module.exports = consolers