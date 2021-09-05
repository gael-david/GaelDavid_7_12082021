import { useEffect, useState } from "react";
import { getAllPostsAPI } from "../../../api/getAllPosts";
import CreatePostForm from "../../post/components/CreatePostForm";
import Feed from "../components/Feed";
import { PostType } from "../../../interfaces/Post";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";
import ErrorHandler from "../../error/ErrorHandler";
import { AxiosError } from "axios";

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<AxiosError>(null);

  async function fetchPosts() {
    try {
      const allPosts = await getAllPostsAPI();
      setPosts(allPosts);
    } catch (error: any) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <ErrorHandler error={error} />;

  return (
    <CentralContainer>
      <CreatePostForm onUpdated={fetchPosts} />
      <Feed title="Votre feed" posts={posts} onUpdated={fetchPosts} />
    </CentralContainer>
  );
}
