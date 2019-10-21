import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "../Store/store";

import Container from "./components/Container";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Container />
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
