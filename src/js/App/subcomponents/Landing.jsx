import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Header } from "semantic-ui-react";

import { setActiveView } from "../../Navigation/actions";
import { getDeviceIsMobile } from "../selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { setActiveView } = this.props;

    setActiveView("Home");
  }

  render() {
    const { mobile } = this.props;

    return (
      <Fragment>
        <HeaderContainer icon="home" header="Welcome!" />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Header>Ryan Brandt | Software Engineer</Header>
          <p style={{ fontSize: "1.25em" }}>
            Take some time to explore my personal projects, professional
            experience and writing
          </p>
          <div style={{ display: "block", margin: "20px" }}>
            <Button
              as="a"
              target="_blank"
              href="https://linkedin.com/in/ryan-brandt1996"
              color="linkedin"
              icon="linkedin"
              size="big"
              circular
            />
            <Button
              as="a"
              target="_blank"
              href="https://github.com/ryanbrandt"
              icon="github"
              size="big"
              circular
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
