import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";

import Countdown from "./Countdown";

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    const { active } = this.props;
    this.state = {
      active,
    };
  }

  componentDidMount() {
    const { active } = this.props;
    this.setState({ active });
  }

  handleClose = () => {
    this.setState({
      active: false,
    });
  };

  handleReloadApp = () => {
    const { location } = window;
    location.replace("#home");
    location.reload();
  };

  render() {
    const { active } = this.state;

    return (
      <Modal open={active} size="small">
        <Modal.Header>Yikes!</Modal.Header>
        <Modal.Content>
          <p>Looks like we couldn't furnish the data on this page.</p>
          <p>We'll try grabbing that data again </p>
          <Countdown initialCount={8} onCountFinish={this.handleReloadApp} />
          <p>and hopefully that will sort things out</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => this.handleClose()}>
            Ignore
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ErrorModal;
