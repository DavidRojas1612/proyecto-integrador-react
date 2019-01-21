import {IS_AUTHED, SET_QTIONS, SET_TITLE } from '../actions/actionsConst'

export const reducers = (state, action) =>{
    switch (action.type) {
        case IS_AUTHED :
            return { ...state, ...action.payload }   
        case SET_QTIONS :
            return { ...state, questions: action.payload }   
        case SET_TITLE :
            return { ...state, title: action.payload }   
        default:
            return state 
    }
}