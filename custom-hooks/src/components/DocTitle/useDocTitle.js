import React,{useEffect} from "react";

function useDocTitle(count) {
  useEffect(() => {
    window.document.title = `Clicked ${count} times`;
  }, [count]);
}

export default useDocTitle;
