import * as a from "./actionTypes";

export const requestSendMessage = data => {
  return {
    type: a.REQUEST_SEND_MESSAGE,
    data,
  };
};
