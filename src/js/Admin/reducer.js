import * as a from "./actionTypes";

const initialState = {
  visible: false,
  authenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_ADMIN_VISIBLE: {
      return {
        ...state,
        visible: true,
      };
    }

    case a.SET_ADMIN_HIDDEN: {
      return {
        ...state,
        visible: false,
      };
    }

    case a.SET_ADMIN_AUTHENTICATED: {
      return {
        ...state,
        authenticated: true,
      };
    }

    default: {
      return state;
    }
  }
}
