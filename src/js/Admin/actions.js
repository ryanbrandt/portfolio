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

export const setActiveAdminTab = tab => {
  return {
    type: a.SET_ACTIVE_ADMIN_TAB,
    tab,
  };
};

export const setAdminSearchQuery = query => {
  return {
    type: a.SET_ADMIN_SEARCH_QUERY,
    query,
  };
};

export const requestItemUpdate = data => {
  return {
    type: a.REQUEST_ITEM_UPDATE,
    data,
  };
};

export const requestItemDeletion = id => {
  return {
    type: a.REQUST_ITEM_DELETION,
    id,
  };
};

export const requestItemCreation = data => {
  return {
    type: a.REQUEST_ITEM_CREATION,
    data,
  };
};
