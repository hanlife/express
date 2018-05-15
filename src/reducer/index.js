import { combineReducers } from 'redux';
import { orderInfo } from './order.redux'
import { user } from './user.redux'
import { orderLists } from './orderLists.redux'

export default combineReducers({
    orderInfo,
    user,
    orderLists
});