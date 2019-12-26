import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getFilteredProjects, getProjectErrors } from "../selectors";
import { setActiveView } from "../../Navigation/actions";
import ControlMenu from "../../Layout/components/ControlMenu";
import ItemCard from "../../Layout/components/ItemCard";
import HeaderContainer from "../../Layout/components/HeaderContainer";
import ErrorModal from "../../Layout/components/ErrorModal";

class Projects extends Component {
  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Portfolio");
  }

  render() {
    const { projects, errors } = this.props;

    return (
      <div className="fadeable-content">
        <HeaderContainer icon="code" header="Recent Work" />
        <ControlMenu />
        <div
          className="ui three doubling stackable cards"
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
              image,
            } = project;
            return (
              <ItemCard
                key={`project_${id}`}
                content={content}
                title={name}
                date={date}
                link={link}
                image={image}
                icons={!icons ? "" : icons}
              />
            );
          })}
          {projects.length === 0 && (
            <p style={{ textAlign: "center" }}>
              <i>There's nothing here...</i>
            </p>
          )}
        </div>
        <ErrorModal active={errors && projects.length === 0} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: getFilteredProjects(state),
    errors: getProjectErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
