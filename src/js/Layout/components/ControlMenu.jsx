import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Input } from "semantic-ui-react";

import { getActiveView } from "../../Navigation/selectors";
import { getDeviceIsMobile } from "../../App/selectors";
import { menuKeyMap } from "../../Utilities/constants";

const ControlMenu = props => {
  const { mobile } = props;

  const renderSearchInput = () => {
    return (
      <Input
        style={{ width: mobile ? "80vw" : "" }}
        className="icon"
        icon="search"
        placeholder="Search..."
      />
    );
  };

  const renderMenu = () => {
    const { view } = props;
    const { items } = menuKeyMap[view];

    return (
      <Menu position="center" text>
        {items.map(item => (
          <Menu.Item key={`${view}_${item}`} name={item} />
        ))}
        {!mobile && (
          <Menu.Item position="right">{renderSearchInput()}</Menu.Item>
        )}
      </Menu>
    );
  };

  const renderMobileMenu = () => {
    return (
      <Fragment>
        {renderMenu()}
        {renderSearchInput()}
      </Fragment>
    );
  };

  return mobile ? renderMobileMenu() : renderMenu();
};

const mapStateToProps = state => {
  return {
    view: getActiveView(state),
    mobile: getDeviceIsMobile(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(ControlMenu);
