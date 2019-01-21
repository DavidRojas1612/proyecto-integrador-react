import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from '../reducers'

const initialState = {
  authed: false
}

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
