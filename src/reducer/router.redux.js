
const ROUTER = "ROUTER";


const initState = {
};

// reducer
export const router = (state = initState, action) => {
  switch (action.type) {
    case ROUTER:
      return {
        ...state,
        Router: action.router
      };
    default:
      return { ...state };
  }
};

// action

export function Router(router) {
 return { type: ROUTER, router: router };
}
