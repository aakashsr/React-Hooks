import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HookDataFetchingonChange(){
  const [post, setPost] = useState({});
  const [ID, setID] = useState(1);

  useEffect(async () => {
    const newPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${ID}` // converted into template literals
    );
    setPost(newPost.data);
    console.log(post);
  }, [ID]); // passing empty array to make api call only once
  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={(event) => setID(event.target.value)}
      />
      <li>{post.title}</li>
    </div>
  );

}

