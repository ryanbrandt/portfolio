import * as a from "./actionTypes";

export const setAdminAuthenticated = () => {
  return {
    type: a.SET_ADMIN_AUTHENTICATED,
  };
};

export const requestAdminAuthentication = credentials => {
  return {
    type: a.REQUEST_ADMIN_AUTHENTICATION,
    credentials,
  };
};

export const setAdminVisible = () => {
  return {
    type: a.SET_ADMIN_VISIBLE,
  };
};

export const setAdminHidden = () => {
  return {
    type: a.SET_ADMIN_HIDDEN,
  };
};
