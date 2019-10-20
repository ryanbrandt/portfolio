import * as a from "./actionTypes";

export const setActiveView = view => {
  return {
    type: a.SET_ACTIVE_VIEW,
    view,
  };
};
