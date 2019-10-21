import React from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";

import { getAdminAuthenticationStatus } from "../selectors";

const AdminDashboard = () => {
  const panes = [
    {
      menuItem: "Resumé",
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: "Portfolio",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: "Blog",
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ];

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
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
