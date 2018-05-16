import { combineReducers } from 'redux';
import { orderInfo } from './order.redux'
import { user } from './user.redux'
import { orderLists } from './orderLists.redux'
import { router } from './router.redux'

export default combineReducers({
    orderInfo,
    user,
    orderLists,
    router,
});