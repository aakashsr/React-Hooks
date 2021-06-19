import React, { Component } from "react";

export default class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  logMousePosition = (e) => {
    console.log("mouse event");
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}
