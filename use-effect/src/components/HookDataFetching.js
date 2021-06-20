import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HookDataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  }, []); // passing empty array to make api call only once
  return (
    <div>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
}
