import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyAiyjYJASXQTGce-7P7brYo7FFWguDM--I',
    authDomain: 'faii-b67af.firebaseapp.com',
    databaseURL: 'https://faii-b67af.firebaseio.com',
    projectId: 'faii-b67af',
    storageBucket: 'faii-b67af.appspot.com',
    messagingSenderId: '657793556032',
    appId: '1:657793556032:web:fc23c74b2adc9819c149a5',
    measurementId: 'G-DSTT2KYD2T',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
