import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import { setActiveView } from "../../Navigation/actions";
import HeaderContainer from "../../Layout/components/HeaderContainer";
import ControlMenu from "../../Layout/components/ControlMenu";

class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { setActiveView } = this.props;

    setActiveView("Blog");
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer icon="pencil" header="My Writing" />
        <ControlMenu />
        <p style={{ margin: "10px" }}>
          <i>There's nothing here...</i>
        </p>
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
)(Blog);
