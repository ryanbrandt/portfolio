import * as a from "./actionTypes";

const initialState = {
  mobile: false,
  fetching: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_DATA_PENDING: {
      return {
        ...state,
        fetching: true,
      };
    }

    case a.SET_DATA_RECEIVED: {
      return {
        ...state,
        fetching: false,
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
