import React, { Component } from "react";

export default class ClassInputCounter extends Component {
  state = {
    count: 0,
    name: "",
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times!`;
  }

  componentDidUpdate(prevProps,prevState) {
      if(prevState.count !== this.state.count){
        console.log("updating input");
        document.title = `You clicked ${this.state.count} times`;
      }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <input
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
      </div>
    );
  }
}
