import React, { useState } from "react";

export default function HookCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div class="counterBg">
        <h1>{counter}</h1>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
