import styled from "styled-components";
import { PostType } from "../../../interfaces/Post";
import { UserPicture } from "../../../common/components/widgets/UserPicture";
import { Link } from "react-router-dom";

type Props = PostType;

const PostCard = styled.article`
  border: 1px solid rgb(56, 68, 77);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
`;

const PostContent = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostUser = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  width: fit-content;
`;

const PostImage = styled.img`
  border: 1px solid rgb(56, 68, 77);
  max-height: 30rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export default function Post({ post, imageUrl, user }: Props): JSX.Element {
  return (
    <PostCard>
      <UserPicture src={user?.image} />
      <PostContent>
        <PostHeader>
          <PostUser to={`/user/${user?.id}`}>{user?.username}</PostUser>
          <p>{post}</p>
        </PostHeader>
        {imageUrl && <PostImage src={imageUrl} alt={`Post from ${user?.id}`} />}
      </PostContent>
    </PostCard>
  );
}
