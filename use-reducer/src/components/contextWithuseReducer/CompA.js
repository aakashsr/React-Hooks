import React from "react";
import { useContext } from "react";
import CountContext from './../../Context/CountContext';

function CompA() {
  const {countState,countDispatch} = useContext(CountContext);
  return (
    <div>
        <span>Component A: </span>
        <span>{countState}</span>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompA;
