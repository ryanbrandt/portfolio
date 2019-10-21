import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import { setActiveView } from "../../Navigation/actions";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Landing extends Component {
  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Home");
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer icon="home" header="Hello, Ryan here!" />
        <div style={{ textAlign: "center", fontSize: "1.5em" }}>
          <p>How's it going?</p>
          <p>
            My name is <b>Ryan Brandt</b>. I'm a <code>Software Engineer</code>.
          </p>
          <p>
            As you might have guessed, you've reached my <i>personal</i> page.
          </p>
          <p>
            Here, you'll find my (hopefully) updated resumé, an index of my
            personal projects, and some means to get in touch.
          </p>
          <p>
            Oh and my blog if you feel like reading about some of my personal
            interests within and outside of tech.
          </p>
          <p>Enjoy!</p>
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Landing);
