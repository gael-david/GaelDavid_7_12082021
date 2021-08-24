import axios from "axios";
import { baseUrl } from "../helpers/variables";

type FormData = {
  userId: string;
  post: string;
  image?: File
}

export async function createPostAPI(formData: any) {
  try {

    const res = await axios.post(`${baseUrl}/api/posts/create`, formData, {
    headers: {
      'content-Type': 'multipart/form-data'
    }
  });

    return res;
  } catch (error) {
    return error;
  }
}
