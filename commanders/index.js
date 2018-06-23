const fs = require('fs')
const path = require('path')

const commanders = [];
fs.readdirSync(__dirname)
  .filter(file => (file != 'index.js'))
  .forEach((file) => {
    const { commander } = require('./' + file)
    console.log(commander)
    commanders.push(commander)
  })

module.exports = commanders