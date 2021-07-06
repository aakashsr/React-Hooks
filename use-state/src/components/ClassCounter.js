import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    counter: 0,
  };

  setCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        <div class="counterBg">
          <h1>{this.state.counter}</h1>
        </div>
        <button onClick={this.setCounter}>
          Increment
        </button>
      </div>
    );
  }
}
