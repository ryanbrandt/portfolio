import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Label } from "semantic-ui-react";

import { getEducation, getWorkExperience } from "../selectors";
import { setActiveView } from "../../Navigation/actions";
import { technologies } from "../../Utilities/constants";
import ExperienceItem from "./ExperienceItem";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class Experience extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { setActiveView } = this.props;
    setActiveView("Resumé");
  }

  render() {
    const { education, work } = this.props;

    return (
      <div>
        <HeaderContainer header="Resumé" icon="address card outline" />
        <Grid
          columns={3}
          stackable
          divided
          style={{ wordWrap: "break-word", whiteSpace: "no-wrap" }}
        >
          <Grid.Column>
            <HeaderContainer header="Development Experience" />
            {work.map(item => {
              const { name, content, month_year, id } = item;

              return (
                <ExperienceItem
                  key={`experience_${id}`}
                  name={name}
                  content={content}
                  month_year={month_year}
                  work
                />
              );
            })}
          </Grid.Column>
          <Grid.Column>
            <HeaderContainer header="Education" />
            {education.map(item => {
              const { name, content, month_year, id } = item;

              return (
                <ExperienceItem
                  key={`education_${id}`}
                  name={name}
                  content={content}
                  month_year={month_year}
                />
              );
            })}
          </Grid.Column>
          <Grid.Column>
            <HeaderContainer header="I Work With" />
            {technologies.map(technology => (
              <Label
                key={technology}
                color="blue"
                size="large"
                style={{ margin: "5px" }}
              >
                {technology}
              </Label>
            ))}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    work: getWorkExperience(state),
    education: getEducation(state),
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
)(Experience);
