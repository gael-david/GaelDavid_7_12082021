import { AxiosError } from "axios";
import React, { useState } from "react";
import { createCommentAPI } from "../../../api/createComment";
import CommentArea from "../../../common/components/inputs/CommentArea";
import UserPicture from "../../../common/components/widgets/UserPicture";
import { MAX_CHARACTERS } from "../../../helpers/variables";
import { User } from "../../../interfaces/User";
import ErrorHandler from "../../error/ErrorHandler";
import { CommentWrapper, UserPictureWrapper } from "./Comment";

type Props = {
  user: User;
  postId: string;
  onUpdated: () => void;
};

export default function CreateCommentForm({ user, postId, onUpdated }: Props) {
  const [newComment, setNewComment] = useState<string>("");
  const [error, setError] = useState<AxiosError>(null);

  async function onSubmitComment(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e?.key === "Enter") {
      e.preventDefault();
      if (e?.currentTarget?.value === "") return;
      try {
        await createCommentAPI(newComment, postId, user?.id);
        setNewComment("");
        onUpdated?.();
      } catch (error: any) {
        setError(error);
      }
    }

    return;
  }

  function handleComment(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = e?.currentTarget?.value;
    if (input?.length > MAX_CHARACTERS) return;
    setNewComment(input);
  }

  if (error) return <ErrorHandler error={error} />;

  return (
    <CommentWrapper>
      <UserPictureWrapper>
        <UserPicture user={user} />
      </UserPictureWrapper>
      <CommentArea
        name="Comment"
        value={newComment}
        placeholder="Écrivez votre commentaire..."
        onChange={handleComment}
        onSubmit={onSubmitComment}
      />
      {error && <p>{error}</p>}
    </CommentWrapper>
  );
}
