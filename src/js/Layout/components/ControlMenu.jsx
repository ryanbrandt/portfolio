import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Input } from "semantic-ui-react";

import {
  setProjectActiveTab,
  setProjectSearchQuery,
} from "../../Projects/actions";
import { setActiveAdminTab, setAdminSearchQuery } from "../../Admin/actions";
import { getActiveMenuTab } from "../selectors";
import { getActiveView } from "../../Navigation/selectors";
import { getDeviceIsMobile } from "../../App/selectors";
import { menuKeyMap } from "../../Utilities/constants";

const ControlMenu = props => {
  const { mobile } = props;

  const handleTabClick = e => {
    const { view } = props;
    const tab = e.target.id;

    if (view === "Portfolio") {
      const { setProjectTab } = props;
      setProjectTab(tab);
    } else if (view === "Admin") {
      const { setAdminTab } = props;
      setAdminTab(tab);
    }
  };

  const handleInputChange = e => {
    const { view } = props;
    const value = e.target.value.trim();
    const query = value.length > 0 ? value : null;

    if (view === "Portfolio") {
      const { setProjectQuery } = props;
      setProjectQuery(query);
    } else if (view === "Admin") {
      const { setAdminQuery } = props;
      setAdminQuery(query);
    }
  };

  const renderSearchInput = () => {
    return (
      <Input
        style={{
          width: mobile ? "80vw" : "",
        }}
        className="icon"
        icon="search"
        placeholder="Search"
        onChange={e => handleInputChange(e)}
      />
    );
  };

  const renderMenu = () => {
    const { view, activeTab } = props;
    const { items } = menuKeyMap[view];

    return (
      <Menu text>
        {items.map(item => (
          <Menu.Item
            key={`${view}_${item}`}
            id={item}
            name={item}
            onClick={e => handleTabClick(e)}
            active={item === activeTab}
          />
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

const mapDispatchToProps = dispatch => {
  return {
    setProjectTab: tab => dispatch(setProjectActiveTab(tab)),
    setProjectQuery: query => dispatch(setProjectSearchQuery(query)),
    setAdminTab: tab => dispatch(setActiveAdminTab(tab)),
    setAdminQuery: query => dispatch(setAdminSearchQuery(query)),
  };
};

const mapStateToProps = state => {
  return {
    view: getActiveView(state),
    mobile: getDeviceIsMobile(state),
    activeTab: getActiveMenuTab(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlMenu);
