import React, { useEffect,useState } from "react";

export default function HookInputCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating input");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}
