import { combineReducers } from 'redux'
import userReducer from './userReducer'
import breweryReducer from './breweryReducer'

export default combineReducers({
    userReducer,
    breweryReducer
})