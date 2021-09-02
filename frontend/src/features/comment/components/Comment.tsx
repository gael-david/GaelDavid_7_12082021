import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardHeader, CardImage, CardUser } from "../../../common/components/cards/Card";
import CardFooter from "../../../common/components/cards/CardFooter";
import { UserPicture } from "../../../common/components/widgets/UserPicture";
import { extractJwtToken } from "../../../helpers/auth";
import { CommentType } from "../../../interfaces/Comment";

type Props = CommentType;

export default function Comment({ id, comment, imageUrl, user }: Props) {
  const token = extractJwtToken();
  const fromUser = user?.id === token?.userId;
  async function onDeleteComment() {
    console.log("Should be deleted");
    // try {
    //   await deleteOnePostAPI(id);
    //   onUpdated?.();
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <Card>
      <UserPicture src={user?.image} />
      <CardContent>
        <CardHeader>
          <CardUser to={`/user/${user?.id}`}>{user?.username}</CardUser>
          {fromUser && <FontAwesomeIcon icon={faTrash} onClick={onDeleteComment} />}
        </CardHeader>
        <p>{comment}</p>
        {imageUrl && <CardImage src={imageUrl} alt={`Post from ${user?.id}`} />}
      </CardContent>
    </Card>
  );
}
