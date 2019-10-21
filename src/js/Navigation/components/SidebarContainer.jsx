import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

import { getDeviceIsMobile } from "../../App/selectors";
import { getAdminVisible } from "../../Admin/selectors";
import SidebarTile from "./SidebarTile";

import "../../../css/App.css";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  renderSidebarContent = () => {
    const { mobile, adminVisible } = this.props;

    return (
      <Fragment>
        {mobile && (
          <div style={{ padding: "5px" }}>
            <Icon
              name="close"
              size="large"
              inverted
              onClick={() => this.toggleMobileSidebar()}
            />
          </div>
        )}
        <Menu.Item fitted="horizontally">
          <SidebarTile icon="home" label="Home" />
        </Menu.Item>
        <Menu.Item fitted="horizontally">
          <SidebarTile label="Resumé" icon="address card outline" />
        </Menu.Item>
        <Menu.Item fitted="horizontally">
          <SidebarTile label="Portfolio" icon="code" />
        </Menu.Item>
        <Menu.Item fitted="horizontally">
          <SidebarTile label="Contact" icon="mail outline" />
        </Menu.Item>
        <Menu.Item fitted="horizontally">
          <SidebarTile label="Blog" icon="pencil alternate" />
        </Menu.Item>
        {adminVisible && (
          <Menu.Item fitted="horizontally">
            <SidebarTile label="Admin" icon="settings" />
          </Menu.Item>
        )}
      </Fragment>
    );
  };

  renderNonMobileSidebar = () => {
    return (
      <Menu fixed="left" vertical inverted compact>
        {this.renderSidebarContent()}
      </Menu>
    );
  };

  toggleMobileSidebar = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  renderMobileSidebar = () => {
    const { active } = this.state;

    return (
      <Fragment>
        <Menu fixed="top" inverted>
          <Icon
            name="bars"
            className="ico"
            size="large"
            inverted
            style={{ padding: "8px" }}
            onClick={() => this.toggleMobileSidebar()}
          />
        </Menu>
        <Sidebar
          as={Menu}
          animation="overlay"
          width="wide"
          inverted
          vertical
          compact
          visible={active}
        >
          {this.renderSidebarContent()}
        </Sidebar>
      </Fragment>
    );
  };

  render() {
    const { mobile } = this.props;

    return mobile ? this.renderMobileSidebar() : this.renderNonMobileSidebar();
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
    adminVisible: getAdminVisible(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(SidebarContainer);
