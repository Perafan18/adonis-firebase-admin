# adonis-firebase-admin

Firebase client and admin providers for AdonisJS

[![npm version](https://badge.fury.io/js/adonis-firebase-admin.svg)](https://badge.fury.io/js/adonis-firebase-admin)

[![Build status](https://ci.appveyor.com/api/projects/status/j5bj7h3uhqf5eu2s/branch/master?svg=true)](https://ci.appveyor.com/project/Perafan18/adonis-firebase-admin/branch/master)


[![GitHub license](https://img.shields.io/github/license/Perafan18/adonis-firebase-admin.svg)](https://github.com/Perafan18/adonis-firebase-admin/blob/master/LICENSE)


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
