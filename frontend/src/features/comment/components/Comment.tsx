import { AxiosError } from "axios";
import { useState } from "react";
import styled from "styled-components";
import { deleteOneCommentAPI } from "../../../api/deleteOneComment";
import DeleteButton from "../../../common/components/buttons/DeleteButton";
import { CardContent, CardHeader, CardImage } from "../../../common/components/cards/Card";
import UserName from "../../../common/components/widgets/UserName";
import UserPicture from "../../../common/components/widgets/UserPicture";
import { extractJwtToken } from "../../../helpers/auth";
import { CommentType } from "../../../interfaces/Comment";
import ErrorHandler from "../../error/ErrorHandler";

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const UserPictureWrapper = styled.div`
  padding: 0 2rem;
`;

export const StyledComment = styled.article`
  flex: 1;
  background: #192734;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
`;

type Props = CommentType & {
  onDeleted: () => void;
};

export default function Comment({ id, comment, imageUrl, user, onDeleted }: Props) {
  const currentUser = extractJwtToken();
  const [error, setError] = useState<AxiosError>(null);
  const isFromUser = user?.id === currentUser?.id;

  async function onDeleteComment() {
    console.log("Should be deleted");
    try {
      await deleteOneCommentAPI(id);
      onDeleted?.();
    } catch (error: any) {
      setError(error);
    }
  }

  if (error) return <ErrorHandler error={error} />;

  return (
    <CommentWrapper>
      <UserPictureWrapper>
        <UserPicture user={user} />
      </UserPictureWrapper>
      <StyledComment>
        <CardContent>
          <CardHeader>
            <UserName user={user} />
            {isFromUser && <DeleteButton onDelete={onDeleteComment} />}
          </CardHeader>
          <p>{comment}</p>
          {imageUrl && <CardImage src={imageUrl} alt={`Post from ${user?.id}`} />}
        </CardContent>
      </StyledComment>
    </CommentWrapper>
  );
}
