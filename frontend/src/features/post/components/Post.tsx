import { PostType } from "../../../interfaces/Post";
import { UserPicture } from "../../../common/components/widgets/UserPicture";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { extractJwtToken } from "../../../helpers/auth";
import { deleteOnePostAPI } from "../../../api/deleteOnePost";
import PostFooter from "../../../common/components/cards/CardFooter";
import { Card, CardContent, CardHeader, CardImage, CardUser } from "../../../common/components/cards/Card";

type Props = PostType & {
  onUpdated?: () => void;
};

export default function Post({ id, post, imageUrl, user, onUpdated }: Props): JSX.Element {
  const token = extractJwtToken();
  const fromUser = user?.id === token?.userId;
  let history = useHistory();

  async function onDeletePost() {
    try {
      await deleteOnePostAPI(id);
      onUpdated?.();
    } catch (error) {
      console.log(error);
    }
  }

  function redirectToPost() {
    history.push(`/post/${id}`);
  }

  return (
    <Card onClick={redirectToPost}>
      <UserPicture src={user?.image} />
      <CardContent>
        <CardHeader>
          <CardUser to={`/user/${user?.id}`}>{user?.username}</CardUser>
          {fromUser && <FontAwesomeIcon icon={faTrash} onClick={onDeletePost} />}
        </CardHeader>
        <p>{post}</p>
        {imageUrl && <CardImage src={imageUrl} alt={`Post from ${user?.id}`} />}
        <PostFooter />
      </CardContent>
    </Card>
  );
}
