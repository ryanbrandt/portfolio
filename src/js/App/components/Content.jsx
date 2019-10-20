import React from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { getDeviceIsMobile } from "../selectors";
import { getActiveView } from "../../Navigation/selectors";
import { headerKeyMap } from "../../Utilities/constants";
import HeaderContainer from "../../Layout/components/HeaderContainer";
import Landing from "../subcomponents/Landing";

const Content = props => {
  const { mobile, view } = props;

  return (
    <Container style={{ width: "75vw", marginTop: mobile ? "8vh" : "5vh" }}>
      <HeaderContainer
        icon={headerKeyMap[view].icon}
        header={headerKeyMap[view].header}
      />
      <Landing />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
    view: getActiveView(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
