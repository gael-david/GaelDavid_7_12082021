import axios from "axios";
import { extractJwtToken, getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

type FormData = {
  userId: string;
  post: string;
  image?: File
}

export async function createPostAPI(formData: any) {
  try {

    const res = await axios.post(`${BASE_URL}/api/posts/create`, formData, {
    headers: {
      'content-Type': 'multipart/form-data',
      'authorization': `Bearer ${getJwtToken()}`
    }
  });

    return res;
  } catch (error) {
    return error;
  }
}
