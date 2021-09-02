import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsAPI } from "../../../api/getComments";
import { getOnePostAPI } from "../../../api/getOnePost";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";
import { CommentType } from "../../../interfaces/Comment";
import { PostType } from "../../../interfaces/Post";
import Post from "../components/Post";
import Comment from "../../comment/components/Comment";

export default function PostPage() {
  const [post, setPost] = useState<PostType>();
  const [comments, setComments] = useState<CommentType[]>([]);

  let { id } = useParams<{ id: string }>();

  async function fetchPost() {
    try {
      const post = await getOnePostAPI(id);
      setPost(post);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchComments() {
    try {
      const comments = await getCommentsAPI(id);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadPage() {
    fetchPost();
    fetchComments();
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <CentralContainer>
      {post && <Post key={post.id} id={post.id} post={post.post} user={post.user} imageUrl={post.imageUrl} />}
      {comments?.map((comment) => (
        <Comment id={comment.id} comment={comment.comment} key={comment.id} imageUrl={comment.imageUrl} user={comment.user} />
      ))}
    </CentralContainer>
  );
}
