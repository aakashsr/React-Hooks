// import React, { useEffect, useRef } from "react";

// export default function FocusInput() {
//   const inputRef = useRef(null);

//   useEffect(() =>{
//     inputRef.current.focus();
//   },[])
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  }

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={(e) => focus(e)}>Start Typing</button>
    </>
  );
}
