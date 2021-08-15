import React, { useState, useEffect ,useContext} from "react";
import CountContext from "../../Context/CountContext";

function DataFetchingOne() {
  const {countState,countDispatch} = useContext(CountContext);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      setPost(data);
      setLoading(false);
      console.log(data);
    };
    getPosts();
  }, []);
  return <div>{loading ? "Loading..." : post.title}</div>;
}

export default DataFetchingOne;
