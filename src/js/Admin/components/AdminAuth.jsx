import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";

import { requestAdminAuthentication, clearAdminDenials } from "../actions";
import { getDeviceIsMobile } from "../../App/selectors";
import { getAdminDeniedStatus } from "../selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class AdminAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: null,
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      credentials: e.target.value,
    });
  };

  handleAuthentication = () => {
    const { requestAuthentication, clearDenials } = this.props;
    const { credentials } = this.state;

    clearDenials();
    requestAuthentication(credentials);
  };

  render() {
    const { mobile, isDenied } = this.props;

    return (
      <Fragment>
        <HeaderContainer icon="dont" header="Are you me?" />
        <p style={{ textAlign: "center" }}>If not... go away!</p>
        <Form
          style={{ textAlign: "center" }}
          onSubmit={() => this.handleAuthentication()}
        >
          <Form.Field>
            <label>My Super Secret Password</label>
            <Input
              type="password"
              style={{ width: mobile ? "100%" : "50%" }}
              onChange={e => this.handleChange(e)}
              required
            />
          </Form.Field>
          <Form.Field>
            <Button>Authenticate</Button>
          </Form.Field>
          {isDenied && <p style={{ color: "red" }}>Invalid Password!</p>}
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
    isDenied: getAdminDeniedStatus(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAuthentication: credentials =>
      dispatch(requestAdminAuthentication(credentials)),
    clearDenials: () => dispatch(clearAdminDenials()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuth);
