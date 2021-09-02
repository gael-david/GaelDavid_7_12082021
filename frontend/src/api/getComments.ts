import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function getCommentsAPI(id: string) {

    const { data } = await axios.get(`${BASE_URL}/api/posts/${id}/comments`, {
        headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });
    
  return data;

}