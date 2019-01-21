import { IS_AUTHED, SET_QTIONS, SET_TITLE } from './actionsConst'
import firebase from 'firebase/app'
import 'firebase/database/dist/index.cjs'
import 'firebase/auth'

export const isAuthed = value => ({ type: IS_AUTHED, payload: value })
const setQuestions = value => ({ type: SET_QTIONS, payload: value })
const setTitle = value => ({ type: SET_TITLE, payload: value })

export const logIn = () => {
  return dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        dispatch(
          isAuthed({
            authed: true,
            user: result.user
          })
        )
      })
      .catch(err => console.log(err.message))
  }
}

export const logOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        dispatch(
          isAuthed({
            authed: false,
            user: null
          })
        )
      })
      .catch(err => console.log('error al cerrar sesión', err))
  }
}

export const getQuestions = () => {
  return dispatch => {
    const database = firebase.database()
    database.ref().once('value', snapshot => {
      dispatch(setQuestions(snapshot.val()))
      dispatch(setTitle('Topics Board'))
    })
  }
}
