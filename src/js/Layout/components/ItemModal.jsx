import React from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

import { getActiveView } from "../../Navigation/selectors";
import ProjectModalContent from "../../Projects/subcomponents/ProjectModalContent";
import CreateModalContent from "../../Admin/subcomponents/CreateModalContent";

const ItemModal = props => {
  const { active, title, date, content, handleClose, view, link } = props;

  return (
    <Modal
      open={active}
      size="fullscreen"
      style={{ marginBottom: "10px" }}
      onClose={() => handleClose()}
      closeIcon
    >
      {view === "Portfolio" ? (
        <ProjectModalContent
          title={title}
          date={date}
          link={link}
          content={content}
        />
      ) : (
        <CreateModalContent closeModal={handleClose} />
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
