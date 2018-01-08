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

then you can simply call it from within controllers etc:

```javascript
const Firebase = use('Firebase');
const FirebaseAdmin = use('FirebaseAdmin');
`````
