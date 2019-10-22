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
  },
  projects: {
    data: [],
    filters: {
      activeTab: "All",
      query: null,
    },
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

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  systemInitialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
