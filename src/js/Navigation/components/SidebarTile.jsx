import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

import { setActiveView } from "../actions";
import { getActiveView } from "../selectors";

const SidebarTile = props => {
  const { label, icon, activeView, setActiveView } = props;
  const active = activeView === label;

  const renderTileContent = () => {
    return (
      <Button
        animated="vertical"
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

  const renderInactiveTileContent = () => {
    return <Link to={`/${label}`}>{renderTileContent()}</Link>;
  };

  return active ? renderTileContent() : renderInactiveTileContent();
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
