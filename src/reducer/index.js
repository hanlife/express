import { combineReducers } from 'redux';
import { orderInfo } from './order.redux'
import { user } from './user.redux'

export default combineReducers({
    orderInfo,
    user
});