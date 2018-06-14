'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(path.join(__dirname, 'stubs/firebase.js'), path.join(cli.helpers.configPath(), 'firebase.js'))
    cli.command.completed('create', 'config/firebase.js')
  } catch (error) {
    console.log(error)
  }
}
