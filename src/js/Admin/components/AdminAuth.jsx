import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";

import { requestAdminAuthentication } from "../actions";
import { getDeviceIsMobile } from "../../App/selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";

class AdminAuth extends Component {
  componentWillMount() {
    this.setState({
      loading: false,
      credentials: null,
    });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      credentials: e.target.value,
    });
  };

  handleAuthentication = () => {
    this.setState({
      loading: true,
    });

    const { requestAuthentication } = this.props;
    const { credentials } = this.state;

    requestAuthentication(credentials);
  };

  render() {
    const { mobile } = this.props;
    const { loading } = this.state;

    return (
      <Fragment>
        <HeaderContainer icon="dont" header="Are you me?" />
        <p style={{ textAlign: "center" }}>If not... go away!</p>
        <Form
          style={{ textAlign: "center" }}
          onSubmit={() => this.handleAuthentication()}
          loading={loading}
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
        </Form>
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
    requestAuthentication: credentials =>
      dispatch(requestAdminAuthentication(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminAuth);
