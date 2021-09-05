import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function deleteOneCommentAPI(id: string) {
    const res = await axios.delete(`${BASE_URL}/api/posts/comments/${id}`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });

    return res;
}
