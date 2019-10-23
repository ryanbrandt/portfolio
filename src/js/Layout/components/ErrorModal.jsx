import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";

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

  render() {
    const { active } = this.state;

    return (
      <Modal open={active} size="small">
        <Modal.Header>Uh Oh</Modal.Header>
        <Modal.Content>
          <p>
            Looks like we're experiencing some server issues. Some information
            may be missing from this page.
          </p>
          <p>Try refreshing your page or visit later.</p>
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
