import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

const systemInitialState = {
  system: {
    mobile: false,
    fetching: true,
  },
  navigation: {
    view: "Home",
  },
  experience: {
    data: [],
    errors: null,
  },
  projects: {
    data: [],
    errors: null,
    filters: {
      activeTab: "All",
      query: null,
    },
  },
  contact: {
    messageSent: false,
    errors: null,
  },
  admin: {
    visible: false,
    authenticated: false,
    filters: {
      activeTab: "Resumé",
      query: null,
    },
  },
};

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  systemInitialState,
  compose(
    applyMiddleware(sagaMiddleware),
    isDevelopment ? composeEnhancers() : () => null
  )
);

sagaMiddleware.run(rootSaga);

export default store;
