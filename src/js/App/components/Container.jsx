import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { initializePortfolio, setDeviceStatus } from "../actions";
import { getDeviceIsMobile, getDataPending } from "../selectors";
import Content from "./Content";
import LoaderContainer from "../subcomponents/LoaderContainer";
import SidebarContainer from "../../Navigation/components/SidebarContainer";

class Container extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.debouncedResizeHandler);
    this.debouncedResizeHandler();

    const { initializePortfolio } = this.props;
    initializePortfolio();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedResizeHandler);
    if (this.resizeTimer) clearInterval(this.resizeTimer);
  }

  debouncedResizeHandler = () => {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 200);
    } else {
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 200);
    }
  };

  resizeHandler = () => {
    const { setDeviceStatus, mobile } = this.props;

    if (window.innerWidth < 1024) {
      if (!mobile) setDeviceStatus(true);
    } else if (mobile) {
      setDeviceStatus(false);
    }
  };

  render() {
    const { pending } = this.props;

    return pending ? (
      <LoaderContainer show />
    ) : (
      <Fragment>
        <SidebarContainer />
        <Content />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pending: getDataPending(state),
    mobile: getDeviceIsMobile(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializePortfolio: () => dispatch(initializePortfolio()),
    setDeviceStatus: isMobile => dispatch(setDeviceStatus(isMobile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
