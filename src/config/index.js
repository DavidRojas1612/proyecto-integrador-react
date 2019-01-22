import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyCXCV4EXEpgUBCi1yVx_YhMrBrnHxKcGS4',
  authDomain: 'proyectointegradorpoli.firebaseapp.com',
  databaseURL: 'https://proyectointegradorpoli.firebaseio.com',
  projectId: 'proyectointegradorpoli',
  storageBucket: 'proyectointegradorpoli.appspot.com',
  messagingSenderId: '315448472584'
}

const init = () => firebase.initializeApp(config)

const firebaseAuth = firebase.auth

export { init, firebaseAuth }
