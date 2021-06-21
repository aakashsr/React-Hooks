import React, { useState, useEffect, useRef } from "react";

export default function HookTimer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clearn Interval
      </button>
    </>
  );
}
