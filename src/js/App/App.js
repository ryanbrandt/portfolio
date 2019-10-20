import React from "react";
import { Provider } from "react-redux";
import store from "../Store/store";

import "../../css/App.css";

import Container from "./components/Container";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
};

export default App;
