import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

import { setActiveView } from "../actions";
import { getActiveView } from "../selectors";

const SidebarTile = props => {
  const { label, icon, activeView, setActiveView } = props;
  const active = activeView === label;

  return (
    <Button
      animated="vertical"
      as="a"
      style={{
        backgroundColor: "inherit",
        color: "inherit",
        borderRight: active ? "10px solid #435e79" : "10px solid transparent",
        opacity: active ? 0.5 : 1,
        pointerEvents: active ? "none" : "all",
      }}
      onClick={() => setActiveView(label)}
      fluid
    >
      <Button.Content hidden>{label}</Button.Content>
      <Button.Content visible>
        <Icon className="ico" size="large" name={icon} />
      </Button.Content>
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    activeView: getActiveView(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarTile);
