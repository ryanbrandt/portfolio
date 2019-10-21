import React from "react";
import { connect } from "react-redux";

import { getAdminAuthenticationStatus } from "../selectors";
import ControlMenu from "../../Layout/components/ControlMenu";

const AdminDashboard = () => {
  return <ControlMenu />;
};

const mapStateToProps = state => {
  return {
    authenticated: getAdminAuthenticationStatus(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminDashboard);
