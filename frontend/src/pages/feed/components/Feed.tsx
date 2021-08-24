import { useEffect, useState } from "react";
import { getAllPostsAPI } from "../../../api/getAllPosts";

type Posts = {
  title: string;
  content: string;
};

export default function Feed(): JSX.Element {
  const [posts, setPosts] = useState<Posts[]>([]);

  async function fetchPosts() {
    const allPosts = await getAllPostsAPI();
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <h1>Feed</h1>
      {posts?.map((post, index) => {
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
