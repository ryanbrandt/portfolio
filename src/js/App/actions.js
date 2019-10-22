import * as a from "./actionTypes";

export const initializePortfolio = () => {
  return {
    type: a.INITIALIZE_PORTFOLIO,
  };
};

export const setDeviceStatus = isMobile => {
  return {
    type: a.SET_DEVICE_STATUS,
    isMobile,
  };
};

export const setDataPending = () => {
  return {
    type: a.SET_DATA_PENDING,
  };
};

export const setDataReveived = () => {
  return {
    type: a.SET_DATA_RECEIVED,
  };
};
