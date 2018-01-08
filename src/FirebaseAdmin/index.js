'use strict'

const firebaseAdmin = require('firebase-admin')

class FirebaseAdmin {
    initialize(config) {
        config.credential = firebaseAdmin.credential.cert(config.credential)
        return firebaseAdmin.initializeApp(config)
    }
}

module.exports = { FirebaseAdmin };
