import React , {useState,useEffect} from "react";

const WindowResize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });
  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>Size: {size}PX</h2>
    </React.Fragment>
  );
};

export default WindowResize;
