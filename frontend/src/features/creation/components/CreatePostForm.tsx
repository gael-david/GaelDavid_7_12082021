import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { createPostAPI } from "../../../api/createPost";
import { extractJwtToken } from "../../../helpers/auth";
import { MAX_CHARACTERS } from "../../../helpers/variables";
import Button from "../../../common/components/buttons/Button";
import ImageUploadButton from "../../../common/components/buttons/ImageUploadButton";
import { UserPicture } from "../../../common/components/widgets/UserPicture";
import TextArea from "../../../common/components/inputs/TextArea";
import CharacterCounter from "./CharacterCounter";

const CreatePostCard = styled.section`
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  background-color: #192734;
  padding: 3rem;
`;

const MainWrapper = styled.div`
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
  reloadFeed: () => void;
};

export default function CreatePostForm({ reloadFeed }: Props) {
  const user = extractJwtToken();
  const [post, setPost] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [error, setError] = useState<string>("");

  function handlePost(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = e?.currentTarget?.value;
    if (input?.length > MAX_CHARACTERS) return;
    setPost(input);
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e?.target?.files?.[0]);
  }

  const isDisabled = post === "";

  async function handleSubmit() {
    if (isDisabled) return;

    try {
      const userId = user?.userId.toString();
      if (!userId) return;
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("post", post);
      if (image) formData.append("image", image);

      await createPostAPI(formData);
      reloadFeed();
    } catch (error: any) {
      setError(error?.response?.data?.message);
    }
  }

  return (
    <CreatePostCard>
      <UserPicture src={user?.image} />
      <MainWrapper>
        <TextArea
          placeholder={`Quoi de neuf, ${user?.username} ?`}
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
