'use strict'

/*
 * adonis-mail
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(path.join(__dirname, 'examples/firebase.js'), path.join(cli.helpers.configPath(), 'firebase.js'))
    cli.command.completed('create', 'config/firebase.js')
  } catch (error) {
    console.log(error)
  }
}
