import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPostsAPI } from "../../../api/getUserPosts";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";
import { extractJwtToken } from "../../../helpers/auth";
import { PostType } from "../../../interfaces/Post";
import Feed from "../../feed/components/Feed";

export default function UserPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const user = extractJwtToken();

  let { id } = useParams<{ id: string }>();

  async function fetchPosts() {
    const allPosts = await getUserPostsAPI(id);
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <CentralContainer>
      <Feed title={`Feed de ${user?.username}`} posts={posts} />
    </CentralContainer>
  );
}
