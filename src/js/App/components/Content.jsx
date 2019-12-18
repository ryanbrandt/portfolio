import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { getDeviceIsMobile } from "../selectors";
import Landing from "../subcomponents/Landing";
import Admin from "../../Admin/components/Admin";
import Projects from "../../Projects/components/Projects";
import Experience from "../../Experience/components/Experience";
import Contact from "../../Contact/components/Contact";
import Blog from "../../Blog/components/Blog";

class Content extends Component {
  constructor(props) {
    super(props);

    const { history } = this.props;
    history.listen(() => window.scrollTo(0, 0));
  }

  render() {
    const { mobile } = this.props;

    return (
      <Container
        style={{
          width: "75vw",
          marginTop: mobile ? "8vh" : "5vh",
        }}
      >
        <Switch>
          <Route path="/Home">
            <Landing />
          </Route>
          <Route path="/Resumé">
            <Experience />
          </Route>
          <Route path="/Portfolio">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Redirect from="*" to="/Home" />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
  };
};

export default withRouter(connect(mapStateToProps, null)(Content));
