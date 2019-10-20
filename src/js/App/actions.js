import * as a from "./actionTypes";

export const initializePortfolio = () => {
  return {
    type: a.INITIALIZE_PORTFOLIO,
  };
};

export const initializePortfolioSuccess = () => {
  return {
    type: a.INITIALIZE_PORTFOLIO_SUCCESS,
  };
};

export const setDeviceStatus = isMobile => {
  return {
    type: a.SET_DEVICE_STATUS,
    isMobile,
  };
};
