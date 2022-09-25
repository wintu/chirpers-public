const {initializeApp, cert} = require('firebase-admin/app')
// 削除してるため、起動するにはFirebaseを有効化する必要あり
const serviceAccount = require('../firebase_key.json')

module.exports = initializeApp({
  credential: cert(serviceAccount)
})