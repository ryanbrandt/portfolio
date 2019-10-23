import * as a from "./actionTypes";

const initialState = {
  data: [],
  errors: null,
  filters: {
    activeTab: "All",
    query: null,
  },
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

    case a.INITIALIZE_PROJECT_DATA_ERROR: {
      const { error } = action;

      return {
        ...state,
        errors: error,
      };
    }

    case a.CLEAR_PROJECT_ERRORS: {
      return {
        ...state,
        errors: null,
      };
    }

    case a.SET_PROJECT_ACTIVE_TAB: {
      const { tab } = action;

      return {
        ...state,
        filters: {
          ...state.filters,
          activeTab: tab,
        },
      };
    }

    case a.SET_PROJECT_SEARCH_QUERY: {
      const { query } = action;

      return {
        ...state,
        filters: {
          ...state.filters,
          query,
        },
      };
    }

    default: {
      return state;
    }
  }
}
