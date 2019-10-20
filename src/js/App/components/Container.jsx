import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import { initializePortfolio, setDeviceStatus } from "../actions";
import { getPortfolioInitialized, getDeviceIsMobile } from "../selectors";
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
      }, 100);
    } else {
      this.resizeTimer = setTimeout(() => {
        this.resizeHandler();
      }, 100);
    }
  };

  resizeHandler = () => {
    const { setDeviceStatus, mobile } = this.props;

    if (window.innerHeight < 768 || window.innerWidth < 1024) {
      if (!mobile) setDeviceStatus(true);
    } else if (mobile) {
      setDeviceStatus(false);
    }
  };

  render() {
    const { init } = this.props;

    return (
      <Fragment>
        <LoaderContainer show={!init} />
        <SidebarContainer />
        {init && <Content />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    init: getPortfolioInitialized(state),
    mobile: getDeviceIsMobile(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializePortfolio: () => dispatch(initializePortfolio()),
    setDeviceStatus: isMobile => dispatch(setDeviceStatus(isMobile)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
