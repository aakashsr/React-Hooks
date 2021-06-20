import React, { Component } from "react";

export default class InterverClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  render() {
    return <div>{this.state.count}</div>;
  }
}
