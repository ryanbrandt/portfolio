import * as a from "./actionTypes";

const initialState = {
  view: "Home",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_ACTIVE_VIEW: {
      const { view } = action;

      return {
        ...state,
        view,
      };
    }

    default: {
      return state;
    }
  }
}
