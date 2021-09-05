import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { createPostAPI } from "../../../api/createPost";
import { extractJwtToken } from "../../../helpers/auth";
import { MAX_CHARACTERS } from "../../../helpers/variables";
import Button from "../../../common/components/buttons/Button";
import ImageUploadButton from "../../../common/components/buttons/ImageUploadButton";
import UserPicture from "../../../common/components/widgets/UserPicture";
import TextArea from "../../../common/components/inputs/TextArea";
import CharacterCounter from "./CharacterCounter";
import { AxiosError } from "axios";
import ErrorHandler from "../../error/ErrorHandler";

const CreatePostCard = styled.section`
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  background-color: #192734;
  padding: 3rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterAndPublishWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type Props = {
  onUpdated: () => void;
};

export default function CreatePostForm({ onUpdated }: Props) {
  const currentUser = extractJwtToken();
  const [post, setPost] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [error, setError] = useState<AxiosError>(null);

  function handlePost(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = e?.currentTarget?.value;
    if (input?.length > MAX_CHARACTERS) return;
    setPost(input);
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e?.target?.files?.[0]);
  }

  function resetState() {
    setPost("");
    setImage(undefined);
  }

  const isDisabled = post === "";

  async function handleSubmit() {
    if (isDisabled) return;

    try {
      const userId = currentUser?.id.toString();
      if (!userId) return;
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("post", post);
      if (image) formData.append("image", image);

      await createPostAPI(formData);
      resetState();
      onUpdated();
    } catch (error: any) {
      setError(error);
    }
  }

  if (error) return <ErrorHandler error={error} />;

  return (
    <CreatePostCard>
      <UserPicture user={currentUser} />
      <MainWrapper>
        <TextArea
          placeholder={`Quoi de neuf, ${currentUser?.username} ?`}
          name="post"
          value={post}
          onChange={handlePost}
          rows={5}
        />
        <ActionsBar>
          <ImageUploadButton image={image} onChange={handleImage} />
          <CounterAndPublishWrapper>
            <CharacterCounter maxCount={MAX_CHARACTERS} textValue={post} />
            <Button onClick={handleSubmit} primary disabled={isDisabled}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 5 }} />
              Publier
            </Button>
          </CounterAndPublishWrapper>
        </ActionsBar>
        {error && <div>{error}</div>}
      </MainWrapper>
    </CreatePostCard>
  );
}
