import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsAPI } from "../../../api/getComments";
import { getOnePostAPI } from "../../../api/getOnePost";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";
import { CommentType } from "../../../interfaces/Comment";
import { PostType } from "../../../interfaces/Post";
import Post from "../components/Post";
import ErrorHandler from "../../error/ErrorHandler";
import ErrorPage from "../../error/ErrorPage";
import Comment from "../../comment/components/Comment";
import CreateCommentForm from "../../comment/components/CreateCommentForm";
import { extractJwtToken } from "../../../helpers/auth";

export default function PostPage() {
  const [post, setPost] = useState<PostType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [error, setError] = useState<any>(null);

  const currentUser = extractJwtToken();

  let { id } = useParams<{ id: string }>();

  async function fetchPost() {
    try {
      const post = await getOnePostAPI(id);
      setPost(post);
    } catch (error) {
      setError(error);
    }
  }

  async function fetchComments() {
    try {
      const comments = await getCommentsAPI(id);
      setComments(comments);
    } catch (error: any) {
      setError(error);
    }
  }

  async function loadPage() {
    fetchPost();
    fetchComments();
  }

  useEffect(() => {
    loadPage();
  }, []);

  if (error) return <ErrorHandler error={error} />;

  if (!post) return <ErrorPage text="This post does not exist 😭" />;

  return (
    <CentralContainer>
      <Post key={post.id} id={post.id} post={post.post} user={post.user} imageUrl={post.imageUrl} />
      <CreateCommentForm postId={post.id} user={currentUser} onUpdated={loadPage} />
      {comments?.map((comment) => (
        <Comment
          id={comment.id}
          comment={comment.comment}
          key={comment.id}
          imageUrl={comment.imageUrl}
          user={comment.user}
          onDeleted={loadPage}
        />
      ))}
    </CentralContainer>
  );
}
