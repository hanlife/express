import { combineReducers } from 'redux';

const ORDER_DATA = 'ORDER_DATA';

const receiveData = (data, category) => ({
    type: ORDER_DATA,
    data,
    category
});


const orderData = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DATA:
            return {
                ...state,
            };
        default:
            return {...state};
    }
};

export default combineReducers({
    orderData
});