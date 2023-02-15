import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import favouritesReducer from '../reducers/favouritesReducer'
import jobReducer from '../reducers/jobReducer'
import storage from 'redux-persist/lib/storage' // default value: localStorage
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
  storage: storage,
  key: 'root',
  transforms:[
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_KEY,
    }),
  ]
}
const combinedReducer = combineReducers({
    jobs:jobReducer,
    favourites: favouritesReducer,
})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
const persistedStore = persistStore(store)

export { store, persistedStore }
