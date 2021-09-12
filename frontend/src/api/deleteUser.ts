import axios from "axios";
import { getJwtToken } from "../helpers/auth";
import { BASE_URL } from "../helpers/variables";

export async function deleteUserAPI() {
    const res = await axios.delete(`${BASE_URL}/api/auth/delete`, {
    headers: {
      'authorization': `Bearer ${getJwtToken()}`
    }
  });

    return res;
}