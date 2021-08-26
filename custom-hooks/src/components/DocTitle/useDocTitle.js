import React,{useEffect} from "react";

function useDocTitle(count) {
  useEffect(() => {
    window.document.title = `Clicked ${count} times`;
  }, );
}

export default useDocTitle;
