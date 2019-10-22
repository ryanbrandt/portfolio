import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { getDeviceIsMobile } from "../selectors";
import Landing from "../subcomponents/Landing";
import Admin from "../../Admin/components/Admin";
import Projects from "../../Projects/components/Projects";
import Experience from "../../Experience/components/Experience";

const Content = props => {
  const { mobile } = props;

  return (
    <Container style={{ width: "75vw", marginTop: mobile ? "8vh" : "5vh" }}>
      <Switch>
        <Route path="/Home">
          <Landing />
        </Route>
        <Route exact path="/Resumé">
          <Experience />
        </Route>
        <Route path="/Portfolio">
          <Projects />
        </Route>
        <Route path="/Contact">todo</Route>
        <Route path="/Blog">todo</Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Redirect from="*" to="/Home" />
      </Switch>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
