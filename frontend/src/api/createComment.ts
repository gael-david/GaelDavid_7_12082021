import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function createCommentAPI(comment: string, postId: string, userId: string) {
    const res = await axios.post(`${BASE_URL}/api/posts/comments/create`, {
    comment,
    postId,
    userId,
  }, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });

    return res;
}
