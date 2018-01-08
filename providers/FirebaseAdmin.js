'use strict'

const { ServiceProvider, Ioc } = require('@adonisjs/fold');
const FirebaseAdmin = require('../src/FirebaseAdmin');

class FirebaseProvider extends ServiceProvider {

    register() {
        this.app.singleton('Perafan/FirebaseAdmin', () => {
            const Config = this.app.use('Adonis/Src/Config');
            const config = {
                credential: Config.get('firebase.credential'),
                databaseURL: Config.get('firebase.databaseURL')
            };
            return FirebaseAdmin.initialize(config);
        });
    }

    * boot() {
        Ioc.alias('FirebaseAdmin', 'Perafan/FirebaseAdmin')
    }
}

module.exports = FirebaseProvider;
