import { combineReducers } from 'redux'
import couterReducer from '../sliceReducer'

export default combineReducers({
    counter: couterReducer
})