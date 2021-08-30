import styled from "styled-components";
import { PostType } from "../../../interfaces/Post";
import { UserPicture } from "../../../common/components/widgets/UserPicture";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { extractJwtToken } from "../../../helpers/auth";
import { deleteOnePostAPI } from "../../../api/deleteOnePost";

type Props = PostType & {
  onUpdated?: () => void;
};

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
  gap: 2rem;
  justify-content: space-between;
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

export default function Post({ id, post, imageUrl, user, onUpdated }: Props): JSX.Element {
  const token = extractJwtToken();
  const fromUser = user?.id === token?.userId;

  async function onDeletePost() {
    try {
      await deleteOnePostAPI(id);
      onUpdated?.();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PostCard>
      <UserPicture src={user?.image} />
      <PostContent>
        <PostHeader>
          <PostUser to={`/user/${user?.id}`}>{user?.username}</PostUser>
          {fromUser && <FontAwesomeIcon icon={faTrash} onClick={onDeletePost} />}
        </PostHeader>
        <p>{post}</p>
        {imageUrl && <PostImage src={imageUrl} alt={`Post from ${user?.id}`} />}
      </PostContent>
    </PostCard>
  );
}
