import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { setActiveView } from "../../Navigation/actions";
import ControlMenu from "../../Layout/components/ControlMenu";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Projects extends Component {
  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Portfolio");
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer icon="code" header="My Work" />
        <ControlMenu />
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
)(Projects);
