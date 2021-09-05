import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function getOnePostAPI(id: string) {
  const { data } = await axios.get(`${BASE_URL}/api/posts/${id}`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  })
  
  return data;
}
