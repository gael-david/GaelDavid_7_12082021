import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function deleteOnePostAPI(id: string) {
    const res = await axios.delete(`${BASE_URL}/api/posts/${id}`, {
    headers: {
      'content-Type': 'multipart/form-data',
      'authorization': `Bearer ${getJwtToken()}`
    }
  })

  return res;

}
