import React from "react";
import { Grid, List, Divider } from "semantic-ui-react";

const ExperienceItem = props => {
  const { name, content, month_year, work } = props;
  const { description, achievments } = content;

  return (
    <Grid.Row>
      <List>
        <List.Item>
          <List.Icon name={work ? "suitcase" : "student"} />
          <List.Content>
            <List.Header>{name}</List.Header>
            <List.Description>
              <p>{month_year}</p>
              <p>{description}</p>
              {achievments.trim().length > 0 && (
                <>
                  <h5>Achievments</h5>
                  {achievments}
                </>
              )}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
      <Divider horizontal />
    </Grid.Row>
  );
};

export default ExperienceItem;
