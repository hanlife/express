import {test} from "../axios/api";

// type SHOWTYPE:物品类型，寄付方式，增值服务  ORDER_SEND：寄件人信息  ORDER_RECEIVE：收件人信息
// INSURANCEFLAG：是否保价 PAYTYPE：支付方式
// GOODSINFO:货物信息（goodname/height/length/qty/qtyUnit/weight/with）
const ERROR = "ERROR";
const SHOWTYPE = "SHOWTYPE";
const ORDER_SEND = "ORDER_SEND";
const ORDER_SENDAREA = "ORDER_SENDAREA"
const ORDER_RECEIVE = "ORDER_RECEIVE";
const ORDER_RECEIVEAREA = "ORDER_RECEIVEAREA"
const INSURANCEFLAG = "INSURANCEFLAG";
const PAYTYPE = "PAYTYPE";
const GOODSINFOS = "GOODSINFOS"

function errMsg(msg) {
  return {msg, type: ERROR};
}

// a 寄件人信息。b 收件人信息
function registerData(data) {
  if (data.infoType === "a") {
    return {type: ORDER_SEND, sendData: data};
  }
  if (data.infoType === "b") {
    return {type: ORDER_RECEIVE, receiveData: data};
  }
}
// a 寄件人地址信息。b 收件人地址信息
function registerAreaData(data) {
  if (data.infoType === "a") {
    return {type: ORDER_SENDAREA, sendAreaData: data};
  }
  if (data.infoType === "b") {
    return {type: ORDER_RECEIVEAREA, receiveAreaData: data};
  }
}

let intState = {
  sendData: {},
  sendAreaData: {},
  receiveData: {},
  receiveAreaData: {},
  type: '0',
  insuranceFlag: null,
  paytype: null,
  goodsInfos: {}
}

// reducer
export const orderInfo = (state = intState, action) => {
  switch (action.type) {
    case ORDER_SEND:
      return {
        ...state,
        sendData: action.sendData
      };
    case ORDER_RECEIVE:
      return {
        ...state,
        receiveData: action.receiveData
      };
    case ERROR:
      return {
        ...state,
        msg: action.msg
      };
    case SHOWTYPE:
      return {
        ...state,
        type: action.showtype
      };
    case INSURANCEFLAG:
      return {
        ...state,
        type: action.showtype,
        insuranceFlag: action.insuranceFlag
      };
    case PAYTYPE:
      return {
        ...state,
        type: action.showtype,
        paytype: action.paytype
      };

    case GOODSINFOS:
      return {
        ...state,
        type: action.showtype,
        goodsInfos: action.goodsInfos
      };
    case ORDER_RECEIVEAREA:
      return {
        ...state,
        receiveAreaData: action.receiveAreaData
      };
    case ORDER_SENDAREA:
      return {
        ...state,
        sendAreaData: action.sendAreaData
      };
    default:
      return {
        ...state
      };
  }
};

// action
export function getReceiveData({
  name,
  phone,
  provinceName,
  cityName,
  countyName,
  address,
  infoType
}) {
  return registerData({
    name,
    phone,
    provinceName,
    cityName,
    countyName,
    address,
    infoType
  });
}

export function showType(v) {
  return {type: SHOWTYPE, showtype: v};
}

export function getInsuranceFlag(v) {
  return {type: INSURANCEFLAG, showtype: 0, insuranceFlag: v};
}

export function getPayType(v) {
  return {type: PAYTYPE, showtype: 0, paytype: v};
}

export function getGoodsInfo(v) {
  return {type: GOODSINFOS, showtype: 0, goodsInfos: v};
}

export function getArea({provinceName, cityName, countyName, infoType}) {
  return registerAreaData({provinceName, cityName, countyName, infoType});
}
