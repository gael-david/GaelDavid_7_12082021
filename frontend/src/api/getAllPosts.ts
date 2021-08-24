import axios from "axios";
import { baseUrl } from "../helpers/variables";

export async function getAllPostsAPI() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/posts`);
    return data;
  } catch (error) {
    return error;
  }
}
