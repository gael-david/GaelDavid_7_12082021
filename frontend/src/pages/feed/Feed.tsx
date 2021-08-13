import { useEffect, useState } from "react";

const axios = require("axios").default;

type Posts = {
  title: string;
  content: string;
};

export default function Feed() {
  async function fetchPosts() {
    const { data } = await axios.get("http://localhost:4000/api/posts");
    setPosts(data);
  }

  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Feed</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
