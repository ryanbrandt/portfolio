import * as a from "./actionTypes";

export const initializeProjectData = () => {
  return {
    type: a.INITIALIZE_PROJECT_DATA,
  };
};

export const initializeProjectDataSuccess = data => {
  return {
    type: a.INITIALIZE_PROJECT_DATA_SUCCESS,
    data,
  };
};

export const initializeProjectDataError = error => {
  return {
    type: a.INITIALIZE_PROJECT_DATA_ERROR,
    error,
  };
};

export const setProjectActiveTab = tab => {
  return {
    type: a.SET_PROJECT_ACTIVE_TAB,
    tab,
  };
};

export const setProjectSearchQuery = query => {
  return {
    type: a.SET_PROJECT_SEARCH_QUERY,
    query,
  };
};

export const clearProjectErrors = () => {
  return {
    type: a.CLEAR_PROJECT_ERRORS,
  };
};
