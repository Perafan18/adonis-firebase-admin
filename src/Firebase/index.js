'use strict'

const firebase = require('firebase')

class Firebase {
  initialize (config) {
    return firebase.initializeApp(config)
  }
}

module.exports = Firebase
