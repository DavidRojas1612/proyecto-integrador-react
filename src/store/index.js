import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from '../reducers'

const initialState = {
  authed: false
}

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }