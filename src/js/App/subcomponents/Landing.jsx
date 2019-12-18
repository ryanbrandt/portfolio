import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Header, Divider } from "semantic-ui-react";

import { setActiveView } from "../../Navigation/actions";
import { getDeviceIsMobile } from "../selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { setActiveView } = this.props;

    setActiveView("Home");
  }

  renderBodyContent = () => {
    return (
      <Fragment>
        <Header as="h1">Hello, World!</Header>
        <Divider hidden />
        <p style={{ fontSize: "1.25em" }}>
          My name is Ryan Brandt. I'm a Software Engineer.
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
      </Fragment>
    );
  };

  render() {
    return (
      <div className="fadeable-content">
        <HeaderContainer icon="home" />
        <div
          style={{
            textAlign: "center",
          }}
        >
          {this.renderBodyContent()}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
