import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favouritesReducer'
import jobReducer from '../reducers/jobReducer'

const store = configureStore({
  reducer: combineReducers({
    jobs:jobReducer,
    favourites: favouritesReducer,
  })
})

export default store
