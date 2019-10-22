import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, List, Form, Input, TextArea, Button } from "semantic-ui-react";

import { requestSendMessage } from "../actions";
import { getDeviceIsMobile } from "../../App/selectors";
import { setActiveView } from "../../Navigation/actions";
import HeaderContainer from "../../Layout/components/HeaderContainer";

const initialState = {
  fields: {
    name: null,
    email: null,
    content: null,
  },
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Contact");
  }

  handleSubmit = () => {
    const { fields } = this.state;
    const { sendMessage } = this.props;

    sendMessage(fields);
    this.setState(initialState);
  };

  handleChange = e => {
    const { fields } = this.state;
    this.setState({
      ...this.state,
      fields: {
        ...fields,
        [e.target.id]: e.target.value,
      },
    });
  };

  renderContactContent = () => {
    const { mobile } = this.props;
    const { fields } = this.state;
    const { name, email, content } = fields;

    return (
      <Fragment>
        <Grid.Row style={{ margin: "25px", width: mobile ? "90vw" : "45vw" }}>
          <Form onSubmit={() => this.handleSubmit()}>
            <Form.Field>
              <Input
                id="name"
                icon="user"
                value={name}
                placeholder="Your Name"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field>
              <Input
                id="email"
                icon="mail"
                value={email}
                placeholder="Your Email"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field>
              <TextArea
                id="content"
                rows={5}
                value={content}
                placeholder="What can I do for you?"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field style={{ textAlign: "center" }}>
              <Button>Send Message</Button>
            </Form.Field>
          </Form>
        </Grid.Row>
        <Grid.Row style={{ margin: "10px" }}>
          <List>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>
                <List.Header>Open To Freelance</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Row>
        <Grid.Row style={{ margin: "10px" }}>
          <Button
            as="a"
            target="_blank"
            href="https://linkedin.com/in/ryan-brandt1996"
            color="linkedin"
            icon="linkedin"
            size="big"
            circular
          />
          <Button
            as="a"
            target="_blank"
            href="https://github.com/ryanbrandt"
            icon="github"
            size="big"
            circular
          />
        </Grid.Row>
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        <HeaderContainer header="Get in Touch" icon="mail outline" />
        <Grid columns={1}>
          <Grid.Column
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {this.renderContactContent()}
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
    sendMessage: data => dispatch(requestSendMessage(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
