import * as a from "./actionTypes";

export const initializeExperienceData = () => {
  return {
    type: a.INITIALIZE_EXPERIENCE_DATA,
  };
};

export const initializeExperienceDataSuccess = data => {
  return {
    type: a.INITIALIZE_EXPERIENCE_DATA_SUCCESS,
    data,
  };
};
