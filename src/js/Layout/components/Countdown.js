import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    const { initialCount } = this.props;

    this.state = {
      count: initialCount,
    };
  }

  componentWillMount() {
    const { initialCount } = this.props;

    this.setState({ ...this.state, count: initialCount });
    this.handleCountdown();
  }

  handleCountdown = () => {
    const { onCountFinish } = this.props;

    setInterval(() => {
      const { count } = this.state;
      if (count > 0) {
        this.setState({ ...this.state, count: count - 1 });
      } else {
        onCountFinish();
      }
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return <h1>{count}</h1>;
  }
}

export default Countdown;
