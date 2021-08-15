import React from "react";
import { useContext } from "react";
import CountContext from './../../Context/CountContext';

function CompD() {
    const {countState,countDispatch} = useContext(CountContext);
  return (
    <div>
      <span>Component D: </span>
      <span>{countState}</span>
      <button onClick={() => countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompD;
