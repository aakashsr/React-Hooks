import React, { useReducer } from "react";

const initialState = { counterOne: 0, counterTwo: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {  counterOne: state.counterOne + action.value };
    case "decrement":
      return {  counterOne: state.counterOne - action.value };
    case "increment2":
      return {  counterTwo: state.counterTwo + action.value };
    case "decrement2":
      return {  counterTwo: state.counterTwo - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.counterOne}</h1>
      <h1>{state.counterTwo}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter3;
