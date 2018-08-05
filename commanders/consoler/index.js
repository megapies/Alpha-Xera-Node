const fs = require('fs')
const path = require('path')

const consoler = [];
fs.readdirSync(__dirname)
  .filter(file => (file != 'index.js'))
  .forEach((file) => {
    console.log('regis consoler', file)
    const { consoler } = require('./' + file)
    console.log(consoler)
    consoler.push(consoler)
  })

module.exports = consoler