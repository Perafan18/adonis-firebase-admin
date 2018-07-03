'use strict'

require('dotenv').load()
const test = require('japa')
const faker = require('faker')
const Firebase = require('../src/Firebase')

test.group('Firebase', () => {
  test('register and store username', async (assert) => {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    }
    const firebase = new Firebase().initialize(config)
    const email = faker.internet.email()
    const password = faker.internet.password()
    const username = faker.internet.userName()
    await firebase.auth().createUserWithEmailAndPassword(email, password)

    const user = firebase.auth().currentUser
    const uid = user.uid
    await firebase.database().ref('users/' + uid).set({
      username: username
    });

    const usernameFirebase = await firebase.database().ref('users/' + uid).once('value').then(function(snapshot) {
      return snapshot.val().username
    })

    assert.equal(username, usernameFirebase)

    firebase.auth().signOut()
  })
})
