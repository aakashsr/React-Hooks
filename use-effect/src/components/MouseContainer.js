import React from "react";
import ClassMouse from "./ClassMouse";

export default class MouseContainer extends React.Component {
  state = {
    display: true,
  };

  setDisplay() {
    this.setState((prevState) => ({ display: !prevState.display }));
  }
  render() {
    console.log(this.state.display);
    return (
      <div>
        <button onClick={() => this.setDisplay()}>Toggle</button>
        {this.state.display && <ClassMouse />}
      </div>
    );
  }
}
