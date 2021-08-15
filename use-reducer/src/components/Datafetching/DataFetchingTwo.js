import React, { useReducer, useEffect, useContext } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong!",
        post: {},
      };
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    };
    getPosts();
  }, []);
  return <div>{state.loading ? "Loading..." : state.post.title}</div>;
}

export default DataFetchingTwo;
