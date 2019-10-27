import * as a from "./actionTypes";

export const initializeBlogData = () => {
  return {
    type: a.INITIALIZE_BLOG_DATA,
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
