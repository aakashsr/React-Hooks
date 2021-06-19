import React , { useEffect,useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = `Clicked ${count} times`
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
