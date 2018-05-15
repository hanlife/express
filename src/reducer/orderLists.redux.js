const ORDERDETAIL = "ORDERDETAIL"
const PAYARRY = "PAYARRY"

const initState = {
    orderLists: [],
    payArry: []
};

// reducer
export const orderLists = (state = initState, action) => {
    switch (action.type) {
        case ORDERDETAIL:
            return {
                ...state,
                orderLists: action.orderLists
            };
        case PAYARRY:
            return {
                ...state,
                payArry: action.payArry
            };
        default:
            return {
                ...state
            };
    }
};

// action

export function orderData(data) {
    return {
        type: ORDERDETAIL,
        orderLists: data.map(v => {
            v.checked = false;
            return v
        })
    };
}

export function pushPay(payArry) {
    return {type: PAYARRY, payArry: payArry};
}

export function checked(id, data) {
    return {
        type: ORDERDETAIL,
        orderLists: data.map(v => {
            if (id === v.id) {
                v.checked = !v.checked
            };
            return v
        })
    };
}
