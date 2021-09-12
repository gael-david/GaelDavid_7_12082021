import { PostType } from "../../../interfaces/Post";
import UserPicture from "../../../common/components/widgets/UserPicture";
import { useHistory } from "react-router-dom";
import { extractJwtToken } from "../../../helpers/auth";
import { deleteOnePostAPI } from "../../../api/deleteOnePost";
import { Card, CardContent, CardHeader, CardImage } from "../../../common/components/cards/Card";
import UserName from "../../../common/components/widgets/UserName";
import DeleteButton from "../../../common/components/buttons/DeleteButton";
import { AxiosError } from "axios";
import { useState } from "react";
import ErrorHandler from "../../error/ErrorHandler";

type Props = PostType & {
  onUpdated?: () => void;
};

export default function Post({ id, post, imageUrl, user, onUpdated }: Props): JSX.Element {
  const currentUser = extractJwtToken();
  const isFromUser = user?.id === currentUser?.id;
  const [error, setError] = useState<AxiosError>(null);

  let history = useHistory();

  async function onDeletePost(e: React.MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    try {
      await deleteOnePostAPI(id);
      onUpdated?.();
    } catch (error: any) {
      setError(error);
    }
  }

  function redirectToPost(e: any) {
    history.push(`/post/${id}`);
  }

  if (error) return <ErrorHandler error={error} />;

  return (
    <Card onClick={redirectToPost}>
      <UserPicture user={user} />
      <CardContent>
        <CardHeader>
          <UserName user={user} />
          {isFromUser && <DeleteButton onDelete={onDeletePost} />}
        </CardHeader>
        <p>{post}</p>
        {imageUrl && <CardImage src={imageUrl} alt={`Post from ${user?.id}`} />}
        {/* <CardFooter /> */}
      </CardContent>
    </Card>
  );
}
