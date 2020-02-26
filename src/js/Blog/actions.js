import * as a from "./actionTypes";

export const initializeBlogData = isInit => {
  return {
    type: a.INITIALIZE_BLOG_DATA,
    isInit,
  };
};

export const initializeBlogDataSuccess = data => {
  return {
    type: a.INITIALIZE_BLOG_DATA_SUCCESS,
    data,
  };
};

export const initializeBlogDataError = error => {
  return {
    type: a.INITIALIZE_BLOG_DATA_ERROR,
    error,
  };
};

export const clearBlogErrors = () => {
  return {
    type: a.CLEAR_BLOG_ERRORS,
  };
};
