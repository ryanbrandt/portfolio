import React, { Component } from "react";
import { connect } from "react-redux";

import { setAdminVisible, setAdminHidden } from "../actions";
import { setActiveView } from "../../Navigation/actions";
import { getAdminAuthenticationStatus } from "../selectors";
import AdminDashboard from "./AdminDashboard";
import AdminAuth from "./AdminAuth";

class Admin extends Component {
  componentDidMount() {
    const { setVisible, setActiveView } = this.props;

    setVisible();
    setActiveView("Admin");
  }

  componentWillUnmount() {
    const { setHidden } = this.props;
    setHidden();
  }

  render() {
    const { authenticated } = this.props;
    return authenticated ? <AdminDashboard /> : <AdminAuth />;
  }
}

const mapStateToProps = state => {
  return {
    authenticated: getAdminAuthenticationStatus(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
    setVisible: () => dispatch(setAdminVisible()),
    setHidden: () => dispatch(setAdminHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
