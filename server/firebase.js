const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const config = require('./config');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  projectId: config.projectId
});

const db = firebaseAdmin.firestore()

module.exports = { db };