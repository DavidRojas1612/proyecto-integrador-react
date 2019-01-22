import {
  IS_AUTHED,
  SET_THEMES,
  SET_TITLE,
  SET_THEME
} from '../actions/actionsConst'

export const reducers = (state, action) => {
  switch (action.type) {
    case IS_AUTHED:
      return { ...state, ...action.payload }
    case SET_THEMES:
      return { ...state, themes: action.payload }
    case SET_TITLE:
      return { ...state, title: action.payload }
    case SET_THEME:
      return { ...state, theme: action.payload }
    default:
      return state
  }
}
