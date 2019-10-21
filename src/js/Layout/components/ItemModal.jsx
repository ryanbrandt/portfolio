import React from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

import { getActiveView } from "../../Navigation/selectors";
import ProjectModalContent from "../../Projects/subcomponents/ProjectModalContent";

const ItemModal = props => {
  const { active, title, date, content, handleClose, view } = props;

  return (
    <Modal
      open={active}
      size="large"
      style={{ height: "80vh" }}
      onClose={() => handleClose()}
      closeIcon
    >
      {view === "Portfolio" ? (
        <ProjectModalContent title={title} date={date} content={content} />
      ) : (
        "BlogModalContentHere"
      )}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    view: getActiveView(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemModal);
