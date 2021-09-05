import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function createPostAPI(formData: any) {
  const res = await axios.post(`${BASE_URL}/api/posts/create`, formData, {
  headers: {
    'content-Type': 'multipart/form-data',
    'authorization': `Bearer ${getJwtToken()}`
  }
});

  return res;

}
