import React, { Component } from "react";
import randomcolor from "randomcolor";
import "../../styles/timer.css";

export default class ClassColorfulTimer extends Component {
  state = {
    count: 0,
    color: "",
  };

  tick = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  componentDidMount() {
    this.myInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      this.setState(() => ({ color: randomcolor() }));
    }
  }

  render() {
    return (
      <div className="counterBg">
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
      </div>
    );
  }
}
