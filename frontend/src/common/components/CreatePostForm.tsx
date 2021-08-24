import { useState } from "react";
import { createPostAPI } from "../../api/createPost";
import { useHistory } from "react-router";
import { extractJwtToken } from "../../helpers/auth";
import { homeUrl } from "../../helpers/variables";

// type Props = {
//   title: string;
//   onSubmit: (email: string, password: string) => Promise<void>;
// };

export default function CreatePostForm() {
  const history = useHistory();
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
      history.push(homeUrl);
    } catch (error: any) {
      setError(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <h1>Bonjour {userInfo?.username}, que voulez-vous dire ?</h1>
      <input type="post" name="post" id="post" value={post} onChange={handlePost} />
      <input type="file" name="image" id="image" onChange={handleImage} />
      <button onClick={handleSubmit} disabled={isDisabled}>
        Publier
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}
