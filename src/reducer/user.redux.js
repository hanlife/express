
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

const initState = {
  phone: "",
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

export function login({ phone }) {
  if (!phone) {
    return errMsg("请输入用户名或密码");
  }
  return registerSuccess({ phone })
}
