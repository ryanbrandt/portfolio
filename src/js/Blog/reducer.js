import * as a from "./actionTypes";

const initialState = {
  data: [],
  errors: null,
  filters: {
    activeTab: "all",
    query: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.INITIALIZE_BLOG_DATA_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        data: [...data.posts],
      };
    }

    case a.INITIALIZE_BLOG_DATA_ERROR: {
      const { error } = action;

      return {
        ...state,
        errors: error,
      };
    }

    case a.CLEAR_BLOG_ERRORS: {
      return {
        ...state,
        errors: initialState.errors,
      };
    }

    default: {
      return state;
    }
  }
}
