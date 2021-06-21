import React, { useState, useEffect, useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  const [disabled, setDisable] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  }, [disabled]);

  const focus = () => {
    setDisable((prevValue) => !prevValue);
  };

  return (
    <div>
      <input disabled={disabled} ref={inputRef} type="text" />
      <button onClick={() => focus()}>
        {disabled ? "Start typing" : "Stop typing"}
      </button>
    </div>
  );
}
