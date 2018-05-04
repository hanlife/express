
// type
const ORDER_DATA = 'ORDER_DATA';

// action
export const receiveData = (deliveryData) => ({
    type: ORDER_DATA,
    deliveryData,
});

// reducer
export const orderInfo = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DATA:
            return {
                ...state,
            };
        default:
            return {...state};
    }
};
