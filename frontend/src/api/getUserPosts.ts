import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function getUserPostsAPI(id: string) {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/posts/user/${id}`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });
    return data;
  } catch (error) {
    return error;
  }
}
