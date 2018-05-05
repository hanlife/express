import { test } from "../axios/api";

const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

const initState = {
  phone: "",
  pwd: "",
  msg: ""
};

// reducer
export const user = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        msg: "",
        userData: action.userData
      };
    case ERROR:
      return {
        ...state,
        msg: action.msg
      };
    default:
      return { ...state };
  }
};

function errMsg(msg) {
  console.log(msg);
  return {
    msg,
    type: ERROR
  };
}

function registerSuccess(data) {
  return { type: SUCCESS, userData: data };
}

// action

export function login({ phone, pwd }) {
  if (!phone || !pwd) {
    return errMsg("请输入用户名或密码");
  }
  return dispatch => {
    test({ phone, pwd }).then(res => {
      dispatch(registerSuccess({ phone, pwd }));
    });
  };
}
