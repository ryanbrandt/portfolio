import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { Container } from "semantic-ui-react";

import { getDeviceIsMobile } from "../selectors";
import Landing from "../subcomponents/Landing";
import Admin from "../../Admin/components/Admin";
import Projects from "../../Projects/components/Projects";
import Experience from "../../Experience/components/Experience";
import Contact from "../../Contact/components/Contact";
import Blog from "../../Blog/components/Blog";

const Content = props => {
  const { mobile } = props;

  return (
    <Container
      style={{
        width: "75vw",
        marginTop: mobile ? "8vh" : "5vh",
      }}
    >
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 2 }}
        atActive={{ opacity: 1 }}
        mapStyles={styles => {
          if (styles.opacity > 1) {
            return { display: "none" };
          }
          return { opacity: styles.opacity };
        }}
      >
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
      </AnimatedSwitch>
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
