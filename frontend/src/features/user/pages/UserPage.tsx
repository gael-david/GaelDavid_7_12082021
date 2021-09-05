import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPostsAPI } from "../../../api/getUserPosts";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";
import { PostType } from "../../../interfaces/Post";
import ErrorHandler from "../../error/ErrorHandler";
import ErrorPage from "../../error/ErrorPage";
import Feed from "../../feed/components/Feed";

export default function UserPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<AxiosError>(null);

  let { id } = useParams<{ id: string }>();

  async function fetchPosts() {
    try {
      const allPosts = await getUserPostsAPI(id);
      setPosts(allPosts);
    } catch (error: any) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const pageUser = posts[0]?.user?.username;

  if (error) return <ErrorHandler error={error} />;

  if (!posts.length) return <ErrorPage text="It seems that this user does not exist!" icon={faExclamationCircle} />;

  return (
    <CentralContainer>
      <Feed title={`Feed de ${pageUser}`} posts={posts} />
    </CentralContainer>
  );
}
