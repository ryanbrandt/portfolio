import { createSelector } from "reselect";

export const getExperienceErrors = state => state.experience.errors;
export const getExperience = state => state.experience.data;

export const getWorkExperience = createSelector(
  [getExperience],
  experience => {
    return experience.filter(item => item.tags.includes("work"));
  }
);

export const getEducation = createSelector(
  [getExperience],
  experience => {
    return experience.filter(item => item.tags.includes("education"));
  }
);
