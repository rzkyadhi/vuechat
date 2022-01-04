// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAHIv7COBpiiwn4GR8rWXjCAvBaAdDGdds",
    authDomain: "vuebase-788ee.firebaseapp.com",
    projectId: "vuebase-788ee",
    storageBucket: "vuebase-788ee.appspot.com",
    messagingSenderId: "1902043066",
    appId: "1:1902043066:web:8913153dbe811ded6f4783",
    measurementId: "G-Z4Y9T6WVLL"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp } 