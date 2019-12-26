import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Grid,
  List,
  Form,
  Input,
  TextArea,
  Button,
  Label,
} from "semantic-ui-react";

import { requestSendMessage } from "../actions";
import { getMessageSent, getMessageErrors } from "../selectors";
import { getDeviceIsMobile } from "../../App/selectors";
import { setActiveView } from "../../Navigation/actions";
import HeaderContainer from "../../Layout/components/HeaderContainer";

const initialState = {
  captchaValidated: false,
  fields: {
    name: "",
    email: "",
    content: "",
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

  handleCaptcha = () => {
    this.setState({
      ...this.state,
      captchaValidated: true,
    });
  };

  renderContactForm = () => {
    const { mobile, errors } = this.props;
    const { captchaValidated } = this.state;

    return (
      <Fragment>
        <Grid.Row style={{ margin: "25px", width: mobile ? "90vw" : "45vw" }}>
          {errors && (
            <Label size="large" color="red" style={{ margin: "10px" }}>
              Yikes! Something went wrong. Try again?
            </Label>
          )}
          <Form onSubmit={() => this.handleSubmit()}>
            <Form.Field>
              <Input
                id="name"
                icon="user"
                placeholder="Your Name"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field>
              <Input
                id="email"
                icon="mail"
                type="email"
                placeholder="Your Email"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field>
              <TextArea
                id="content"
                rows={5}
                placeholder="What can I do for you?"
                onChange={e => this.handleChange(e)}
                required
              />
            </Form.Field>
            <Form.Field>
              <ReCAPTCHA
                sitekey="6LeFKr8UAAAAAL-jfBu2qlyDzwySnEDXA4dNJcoA"
                onChange={() => this.handleCaptcha()}
              />
            </Form.Field>
            <Form.Field style={{ textAlign: "center" }}>
              <Button disabled={!captchaValidated}>Send Message</Button>
            </Form.Field>
          </Form>
        </Grid.Row>
      </Fragment>
    );
  };

  renderSuccessContent = () => {
    return (
      <Fragment>
        <HeaderContainer header="Thanks For Reaching Out!" />
        <Label size="large" color="green">
          Your message has been sent, I will be in touch!
        </Label>
      </Fragment>
    );
  };

  renderContactDetail = () => {
    return (
      <Fragment>
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
    const { messageSent } = this.props;

    return (
      <div className="fadeable-content">
        <HeaderContainer header="Start the Conversation" icon="mail outline" />
        <Grid columns={1}>
          <Grid.Column
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {messageSent
              ? this.renderSuccessContent()
              : this.renderContactForm()}
            {this.renderContactDetail()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
    messageSent: getMessageSent(state),
    errors: getMessageErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
    sendMessage: data => dispatch(requestSendMessage(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
