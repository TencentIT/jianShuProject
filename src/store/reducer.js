import { combineReducers } from 'redux'
import hederReducer from '../common/header/store/reducer'

export default combineReducers({
    header : hederReducer
})