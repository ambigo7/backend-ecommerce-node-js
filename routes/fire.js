const firebase = require('firebase-admin')

const serviceAccount = require('./path/flutter-ecommerce-56a04-e30ff4c058a6.json');

/*var config = {
    apiKey: "AIzaSyCqGDcySqpv-MJgJxHSioqctSiF_FBim08",
    authDomain: "flutter-ecommerce-56a04.firebaseapp.com",
    projectId: "flutter-ecommerce-56a04",
    storageBucket: "flutter-ecommerce-56a04.appspot.com",
    messagingSenderId: "408938272864",
    appId: "1:408938272864:web:42d393f5e12eb9be8acb05",
    measurementId: "G-W40FG52Z0P"
};*/

/*var fire = firebase.initializeApp(config);
module.exports = fire*/

var fire = firebase.initializeApp({
 credential: firebase.credential.cert(serviceAccount)
});

/*const sequelize = require("firestore-sequelize")
sequelize.initializeApp(firebase)*/

module.exports = fire
