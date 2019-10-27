import React, { Fragment } from "react";
import { Modal, Grid, Image, Header, Button, Label } from "semantic-ui-react";

const ProjectModalContent = props => {
  const { title, date, content, link, image } = props;
  const { objective, implementation, technology } = content;

  const techArray = technology.split(",");

  return (
    <Fragment>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Grid
          style={{ wordWrap: "break-word", whiteSpace: "no-wrap" }}
          columns={1}
        >
          <Grid.Column>
            <Grid.Row style={{ marginBottom: "20px" }}>
              <small>{date}</small>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "20px" }}>
              <Header>Objective</Header>
              <p>{objective}</p>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "20px" }}>
              <Header>Implementation</Header>
              <p>{implementation}</p>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "20px" }}>
              <Header>Built With</Header>
              {techArray.map(tech => (
                <Label key={tech} style={{ margin: "5px" }}>
                  {tech}
                </Label>
              ))}
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "20px" }}>
              <Button
                as="a"
                target="_blank"
                href={`https://github.com/ryanbrandt/${link}`}
                icon="github"
                size="big"
                circular
              />
            </Grid.Row>
            <Grid.Row>
              <Image src={!image ? "project-placeholder.jpg" : image} fluid />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Fragment>
  );
};

export default ProjectModalContent;
