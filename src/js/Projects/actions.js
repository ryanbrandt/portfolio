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
