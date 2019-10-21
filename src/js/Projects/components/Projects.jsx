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
            const {
              content,
              name,
              month_year: date,
              link,
              icons,
              id,
            } = project;
            return (
              <ItemCard
                key={`project_${id}`}
                content={content}
                title={name}
                date={date}
                link={link}
                icons={icons ? icons : ""}
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
