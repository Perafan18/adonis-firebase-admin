'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const FirebaseAdmin = require('../src/FirebaseAdmin')

class FirebaseProvider extends ServiceProvider {
  /**
   * Register bindings
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Perafan/FirebaseAdmin', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const config = {
        credential: Config.get('firebase.credential'),
        databaseURL: Config.get('firebase.databaseURL')
      }
      return new FirebaseAdmin(config)
    })
  }

  * boot () {
    this.app.alias('Perafan/FirebaseAdmin', 'FirebaseAdmin')
  }
}

module.exports = FirebaseProvider
