import * as a from "./actionTypes";

const initialState = {
  visible: false,
  authenticated: false,
  denied: false,
  filters: {
    activeTab: "Resumé",
    query: null,
  },
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

    case a.SET_ADMIN_DENIED: {
      return {
        ...state,
        denied: true,
      };
    }

    case a.CLEAR_ADMIN_DENIALS: {
      return {
        ...state,
        denied: false,
      };
    }

    case a.SET_ACTIVE_ADMIN_TAB: {
      const { tab } = action;

      return {
        ...state,
        filters: {
          ...state.filters,
          activeTab: tab,
        },
      };
    }

    case a.SET_ADMIN_SEARCH_QUERY: {
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
