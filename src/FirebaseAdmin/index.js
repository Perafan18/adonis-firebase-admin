'use strict'

const firebaseAdmin = require('firebase-admin')

class FirebaseAdmin {
    initialize(config) {
        if(typeof config.credential != 'undefined'){
          config.credential = firebaseAdmin.credential.cert(config.credential)
        }else{
          config.credential = admin.credential.cert({
            projectId: `<${project_id}>`,
            clientEmail: `foo@<${project_id}>.iam.gserviceaccount.com`,
            privateKey: `-----BEGIN PRIVATE KEY-----\n<${key}>\n-----END PRIVATE KEY-----\n`
          })
        }
        return firebaseAdmin.initializeApp(config)
    }
}

module.exports = { FirebaseAdmin };
