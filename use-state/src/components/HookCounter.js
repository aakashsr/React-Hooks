import React, { useState } from "react";

export default function HookCounter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className="counterBg">
        <h1>{counter}</h1>
      </div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
