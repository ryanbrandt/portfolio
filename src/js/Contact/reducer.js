import * as a from "./actionTypes";

const initialState = {
  messageSent: false,
  errors: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_MESSAGE_SENT: {
      return {
        ...state,
        messageSent: true,
      };
    }

    case a.SET_MESSAGE_ERROR: {
      const { error } = action;

      return {
        ...state,
        errors: error,
      };
    }

    case a.CLEAR_MESSAGE_ERRORS: {
      return {
        ...state,
        errors: null,
      };
    }

    default: {
      return state;
    }
  }
}
