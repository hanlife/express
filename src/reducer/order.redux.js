import { test } from "../axios/api";

// type
const ERROR = "ERROR";
const SHOWTYPE = "SHOWTYPE";
const ORDER_SEND = "ORDER_SEND";
const ORDER_RECEIVE = "ORDER_RECEIVE";

function errMsg(msg) {
  return {
    msg,
    type: ERROR
  };
}

// a 寄件人信息。b 收件人信息
function registerData(data) {
  if (data.infoType === "a") {
    return { type: ORDER_SEND, sendData: data };
  }
  if (data.infoType === "b") {
    return { type: ORDER_RECEIVE, receiveData: data };
  }
}

// reducer
export const orderInfo = (state = {}, action) => {
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
    default:
      return { ...state };
  }
};

// action
export function getReceiveData({ name, phone, shq, address, infoType }) {
  return registerData({ name, phone, shq, address, infoType });
}

export function showType(showtype) {
  return { type: SHOWTYPE, showtype: showtype || 0 };
}
