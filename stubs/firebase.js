'use strict'

const Env = use('Env')

/*
 |--------------------------------------------------------------------------
 | Firebase
 |--------------------------------------------------------------------------
 |
 | Provide details of firebase project
 |
 */

module.exports = {

  /*
   |--------------------------------------------------------------------------
   | Firebase Admin credentials key file
   |--------------------------------------------------------------------------
   */
  credential: {
    type: Env.get('FIREBASE_CREDENTIAL_TYPE'),
    project_id: Env.get('FIREBASE_CREDENTIAL_PROJECT_ID'),
    private_key_id: Env.get('FIREBASE_CREDENTIAL_PRIVATE_KEY_ID'),
    private_key: Env.get('FIREBASE_CREDENTIAL_PRIVATE_KEY'),
    client_email: Env.get('FIREBASE_CREDENTIAL_CLIENT_EMAIL'),
    client_id: Env.get('FIREBASE_CREDENTIAL_CLIENT_ID'),
    auth_uri: Env.get('FIREBASE_CREDENTIAL_AUTH_URI'),
    token_uri: Env.get('FIREBASE_CREDENTIAL_TOKEN_URI'),
    auth_provider_x509_cert_url: Env.get('FIREBASE_CREDENTIAL_AUTH_PROVIDER'),
    client_x509_cert_url: Env.get('FIREBASE_CREDENTIAL_CLIENT')
  },
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get('FIREBASE_API_KEY'),
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: Env.get('FIREBASE_AUTH_DOMAIN'),
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: Env.get('FIREBASE_DATABASE_URL'),
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: Env.get('FIREBASE_STORAGE_BUCKET')

}
