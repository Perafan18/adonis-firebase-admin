'use strict'

const firebase = require('firebase')

class Firebase {
  constructor (config) {
    return firebase.initializeApp(config)
  }
}

module.exports = Firebase
