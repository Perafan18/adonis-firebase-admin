# adonis-firebase-admin

Firebase client and admin providers for AdonisJS

## Install

```bash
adonis install adonis-firebase-admin
```

You need to add the provider to AdonisJS at `start/app.js`:

```javascript
const providers = [
   ...
   'adonis-firebase-admin/providers/Firebase',
   'adonis-firebase-admin/providers/FirebaseAdmin'
];
```

and in your `.env` file

```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_STORAGE_BUCKET=
```

then you can simply call it from within controllers etc:

```javascript
const Firebase = use('Firebase');
const FirebaseAdmin = use('FirebaseAdmin');
`````
