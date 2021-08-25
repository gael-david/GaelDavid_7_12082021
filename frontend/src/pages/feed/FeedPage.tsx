import { useEffect, useState } from "react";
import { getAllPostsAPI } from "../../api/getAllPosts";
import CreatePostForm from "../../common/components/CreatePostForm";
import Feed from "./components/Feed";
import { PostType } from "../../interfaces/Post";
import styled from "styled-components";

const FeedPageContainer = styled.section`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-self: center;
`;

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts() {
    const allPosts = await getAllPostsAPI();
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FeedPageContainer>
      <CreatePostForm reloadFeed={fetchPosts} />
      <Feed posts={posts} />
    </FeedPageContainer>
  );
}
