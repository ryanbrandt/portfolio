import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getFilteredProjects } from "../selectors";
import { setActiveView } from "../../Navigation/actions";
import ControlMenu from "../../Layout/components/ControlMenu";
import ItemCard from "../../Layout/components/ItemCard";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Projects extends Component {
  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Portfolio");
  }

  render() {
    const { projects } = this.props;
    return (
      <Fragment>
        <HeaderContainer icon="code" header="My Work" />
        <ControlMenu />
        <div
          className="ui six doubling stackable cards"
          style={{ marginTop: "2vh" }}
        >
          {projects.map(project => {
            const { content, title, date, icon } = project;
            return (
              <ItemCard
                content={content}
                title={title}
                date={date}
                icon={icon}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: getFilteredProjects(state),
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
)(Projects);
