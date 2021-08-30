import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function getAllPostsAPI() {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/posts`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });
    return data;
  } catch (error) {
    return error;
  }
}
