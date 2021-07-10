import React, { useState, useEffect } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default DocTitleOne;
