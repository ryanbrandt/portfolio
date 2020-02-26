import * as a from "./actionTypes";

export const initializeExperienceData = isInit => {
  return {
    type: a.INITIALIZE_EXPERIENCE_DATA,
    isInit,
  };
};

export const initializeExperienceDataSuccess = data => {
  return {
    type: a.INITIALIZE_EXPERIENCE_DATA_SUCCESS,
    data,
  };
};

export const initializeExperienceDataError = error => {
  return {
    type: a.INITIALIZE_EXPERIENCE_DATA_ERROR,
    error,
  };
};

export const clearExperienceErrors = () => {
  return {
    type: a.CLEAR_EXPERIENCE_ERRORS,
  };
};
