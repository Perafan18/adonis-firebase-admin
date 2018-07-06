'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Firebase = require('../src/Firebase')

class FirebaseProvider extends ServiceProvider {
  /**
   * Register bindings
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    this.app.singleton('Perafan/Firebase', () => {
      const config = {
        apiKey: Config.get('firebase.apiKey'),
        authDomain: Config.get('firebase.authDomain'),
        databaseURL: Config.get('firebase.databaseURL'),
        storageBucket: Config.get('firebase.storageBucket')
      }
      return new Firebase(config)
    })
  }

  * boot () {
    this.app.alias('Perafan/Firebase', 'Firebase')
  }
}

module.exports = FirebaseProvider
