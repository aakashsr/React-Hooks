import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter} style={{background: 'none ',color:'#ccc',backgroundColor:'green',border:'none'}}>Increment</button>
      </div>
    );
  }
}
