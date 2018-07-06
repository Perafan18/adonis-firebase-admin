'use strict'

const firebaseAdmin = require('firebase-admin')

class FirebaseAdmin {
  constructor (config) {
    config.credential = firebaseAdmin.credential.cert(config.credential)
    return firebaseAdmin.initializeApp(config)
  }
}

module.exports = FirebaseAdmin
