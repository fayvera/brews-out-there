import { combineReducers } from 'redux'
import user from './userReducer'
import breweries from './breweryReducer'

export default combineReducers({
    user,
    breweries
})