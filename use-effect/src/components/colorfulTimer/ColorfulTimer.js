import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import "../../styles/timer.css";

export default function ColorfulTimer() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  return (
    <div className="counterBg">
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}
