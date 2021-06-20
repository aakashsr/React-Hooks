import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HookDataFetchingonClick(){
  const [post, setPost] = useState({});
  const [ID, setID] = useState(1);
  const [idFromBtnClick,setIdFromBtnClick] = useState(1)

  const handleClick = () => {
      setIdFromBtnClick(ID);
  }

  useEffect(async () => {
    const newPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}` // converted into template literals
    );
    setPost(newPost.data);
    console.log(post);
  }, [idFromBtnClick]); // passing empty array to make api call only once
  return (
    <div>
      <input
        type="text"
        value={ID}
        onChange={(event) => setID(event.target.value)}
      />
      <button onClick={handleClick}>Fetch post</button>
      <li>{post.title}</li>
    </div>
  );
}

