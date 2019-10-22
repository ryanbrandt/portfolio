import React from "react";
import { connect } from "react-redux";

import { getAdminActiveTab } from "../selectors";
import { createNewContentMap } from "../../Utilities/constants";
import AdminTile from "./AdminTile";

const CreateModalContent = props => {
  const { activeTab, closeModal } = props;

  const contentFields = createNewContentMap[activeTab];

  return <AdminTile closeModal={closeModal} content={contentFields} create />;
};

const mapStateToProps = state => {
  return {
    activeTab: getAdminActiveTab(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(CreateModalContent);
