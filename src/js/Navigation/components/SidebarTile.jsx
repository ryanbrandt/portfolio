import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

import { getActiveView } from "../selectors";

const SidebarTile = props => {
  const { label, icon, activeView } = props;
  const active = activeView === label;

  const renderTileContent = () => {
    return (
      <Button
        animated="vertical"
        style={{
          backgroundColor: "inherit",
          color: "inherit",
          borderRight: active
            ? "10px solid #cddefb80"
            : "10px solid transparent",
          opacity: active ? 0.5 : 1,
          pointerEvents: active ? "none" : "all",
        }}
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

export default connect(mapStateToProps, null)(SidebarTile);
