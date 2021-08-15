import React, { useReducer } from "react";

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.counter}</h1>
      <h1>{stateTwo.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
      <button onClick={() => dispatchTwo({ type: "increment", value: 5 })}>
        Increment2
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
        Decrement2
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </div>
      
      
    </div>
  );
}

export default Counter4;
