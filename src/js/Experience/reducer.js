import * as a from "./actionTypes";

const initialState = {
  data: [],
  errors: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.INITIALIZE_EXPERIENCE_DATA_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        data: [...data.work],
      };
    }

    case a.INITIALIZE_EXPERIENCE_DATA_ERROR: {
      const { error } = action;

      return {
        ...state,
        errors: error,
      };
    }

    case a.CLEAR_EXPERIENCE_ERRORS: {
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
