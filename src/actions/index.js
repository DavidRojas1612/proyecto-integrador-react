import { IS_AUTHED, SET_THEMES, SET_TITLE, GET_THEME } from './actionsConst'
import firebase from 'firebase/app'
import 'firebase/database/dist/index.cjs'
import 'firebase/auth'

export const isAuthed = value => ({ type: IS_AUTHED, payload: value })
export const setTitle = value => ({ type: SET_TITLE, payload: value })
export const setThemes = value => ({ type: SET_THEMES, payload: value })
export const getTheme = value => ({ type: GET_THEME, payload: value })

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

export const getThemes = () => {
  return dispatch => {
    const database = firebase.database()
    database.ref().once('value', snapshot => {
      dispatch(setThemes(snapshot.val()))
    })
  }
}
