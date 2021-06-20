import React, { useState, useEffect } from "react";

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount+1);
    console.log(count);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

// import React, {useState, useEffect} from "react"

// function IntervalHookCounter() {
//     const [count, setCount] = useState(0)

//     function timer(){
//       setCount(count+1)
//     }

//     useEffect(() => {
//         const interval = setInterval(timer, 1000)
//     }, [count])

//     return (
//         <div>
//             <h1>{count}</h1>
//         </div>
//     )
// }

// export default IntervalHookCounter
