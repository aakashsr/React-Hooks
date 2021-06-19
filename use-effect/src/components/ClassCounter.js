import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    count: 0,
  };

  componentDidMount(){
      document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(){
      document.title = `Clicked ${this.state.count} times`
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount} style={{background: 'none ',color:'#ccc',backgroundColor:'green',border:'none'}}>Increment</button>
      </div>
    );
  }
}
