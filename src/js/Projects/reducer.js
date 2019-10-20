import * as a from "./actionTypes";

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.INITIALIZE_PROJECT_DATA_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        data: [...data.projects],
      };
    }

    default: {
      return state;
    }
  }
}
