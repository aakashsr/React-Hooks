import React, { useState } from "react";
import useCounter from "./useCounter";

export default function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
