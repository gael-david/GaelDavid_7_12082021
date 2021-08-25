import { faPaperPlane, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { createPostAPI } from "../../api/createPost";
import { extractJwtToken } from "../../helpers/auth";
import Button from "./Button";

const CreatePostCard = styled.section`
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  background-color: #192734;
  padding: 3rem;
`;

const UserPicture = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  object-fit: cover;
`;

const PostInput = styled.input`
  font-size: 20;
  height: 5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

type Props = {
  reloadFeed: () => void;
};

export default function CreatePostForm({ reloadFeed }: Props) {
  const userInfo = extractJwtToken();
  const [post, setPost] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [error, setError] = useState<string>("");

  function handlePost(e: React.ChangeEvent<HTMLInputElement>) {
    setPost(e?.currentTarget?.value);
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e?.target?.files?.[0]);
  }

  const isDisabled = post === "";

  async function handleSubmit() {
    if (isDisabled) return;

    try {
      const userId = userInfo?.userId.toString();
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
      <UserPicture src="/user.png" />
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <PostInput
          placeholder={`Quoi de neuf, ${userInfo?.username} ?`}
          type="textarea"
          name="post"
          id="post"
          value={post}
          onChange={handlePost}
        />
        <div style={{ display: "flex", alignItems: "bottom", justifyContent: "space-between" }}>
          <input type="file" name="image" id="image" placeholder="⌲" onChange={handleImage} />
          <Button onClick={handleSubmit} primary disabled={isDisabled}>
            <>
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 5 }} />
              Publier
            </>
          </Button>
        </div>
        {error && <div>{error}</div>}
      </div>
    </CreatePostCard>
  );
}
