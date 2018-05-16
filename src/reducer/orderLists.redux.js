const ORDERDETAIL = "ORDERDETAIL"

const initState = {
    orderLists: [],
    payArry: [],
    totle: 0
};

// reducer
export const orderLists = (state = initState, action) => {
    switch (action.type) {
        case ORDERDETAIL:
            return {
                ...state,
                orderLists: action.orderLists,
                totle: action.totle
            };
        default:
            return {
                ...state
            };
    }
};

// action

export function orderData(data) {
    let totle = 0
    let lists = data.map(v => {
        if (v.checked === null) {
            v.checked = false;
        } else {
            if (v.checked) 
                totle += v.deliveryMoney
        }
        return v
    })
    return {type: ORDERDETAIL, orderLists: lists, totle: totle};
}

export function checked(id, data) {
    let totle = 0
    let lists = data.map(v => {
        if (id === v.id) {
            v.checked = !v.checked
        };
        if (v.checked) 
            totle += v.deliveryMoney
        return v
    })
    return {type: ORDERDETAIL, orderLists: lists, totle: totle};
}

export function AllChecked(data, bool) {
    let totle = 0
    let lists = data.map(v => {
        v.checked = bool
        if (bool) 
            totle += v.deliveryMoney
        return v
    })
    return {type: ORDERDETAIL, orderLists: lists, totle: totle};
}
