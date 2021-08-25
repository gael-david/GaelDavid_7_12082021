import styled from "styled-components";
import { PostType } from "../../interfaces/Post";

type Props = PostType;

const PostCard = styled.article`
  border: 1px solid rgb(56, 68, 77);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const PostContent = styled.div`
  width: 50rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostImage = styled.img`
  border: 1px solid rgb(56, 68, 77);
  max-height: 30rem;
  object-fit: cover;
  border-radius: 1rem;
`;

export default function Post({ id, post, userId, imageUrl }: Props): JSX.Element {
  return (
    <PostCard>
      <PostContent>
        <p>{post}</p>
        {imageUrl && <PostImage src={imageUrl} alt={`Post from ${userId}`} />}
      </PostContent>
    </PostCard>
  );
}
