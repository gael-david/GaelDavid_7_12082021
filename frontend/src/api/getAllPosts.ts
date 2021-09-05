import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function getAllPostsAPI() {
  const { data } = await axios.get(`${BASE_URL}/api/posts`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  })
  
  return data;
}
