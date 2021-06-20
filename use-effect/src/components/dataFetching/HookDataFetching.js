import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

export default function HookDataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const newPosts = await axios.get(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories"
    );
    setPosts(newPosts.data.items);
    console.log(posts);
  }, []); // passing empty array to make api call only once
  return (
    <ul class="grid popular-grid">
      {posts.map((post) => (
        <Card data={post} />
      ))}
    </ul>
  );
}
