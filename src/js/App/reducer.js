import * as a from "./actionTypes";

const initialState = {
  mobile: false,
  init: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.INITIALIZE_PORTFOLIO_SUCCESS: {
      return {
        ...state,
        init: true,
      };
    }

    case a.SET_DEVICE_STATUS: {
      const { isMobile } = action;

      return {
        ...state,
        mobile: isMobile,
      };
    }

    default: {
      return state;
    }
  }
}
