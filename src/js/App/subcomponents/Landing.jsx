import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, List } from "semantic-ui-react";

import { setActiveView } from "../../Navigation/actions";
import { getDeviceIsMobile } from "../../App/selectors";
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
        <HeaderContainer icon="home" />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <HeaderContainer header="Ryan Brandt | Software Engineer" />
          <p style={{ fontSize: "1.25em" }}>
            Take some time to explore my personal projects, professional
            experience and writing
          </p>
          <div style={{ display: "block" }}>
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
          {mobile && (
            <List style={{ margin: "50px" }} celled horizontal>
              <List.Item>
                <Link to="/Resumé">Resumé</Link>
              </List.Item>
              <List.Item>
                <Link to="/Portfolio">Portfolio</Link>
              </List.Item>
              <List.Item>
                <Link to="/Contact">Contact</Link>
              </List.Item>
            </List>
          )}
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
