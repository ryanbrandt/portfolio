import * as a from "./actionTypes";

export const requestSendMessage = data => {
  return {
    type: a.REQUEST_SEND_MESSAGE,
    data,
  };
};

export const setMessageSent = () => {
  return {
    type: a.SET_MESSAGE_SENT,
  };
};

export const setMessageError = error => {
  return {
    type: a.SET_MESSAGE_ERROR,
    error,
  };
};

export const clearMessageErrors = () => {
  return {
    type: a.CLEAR_MESSAGE_ERRORS,
  };
};
