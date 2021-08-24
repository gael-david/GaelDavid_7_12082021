import axios from "axios";
import { baseUrl } from "../helpers/variables";

export async function loginAPI(email: string, password: string) {
  const res = await axios.post(`${baseUrl}/api/auth/login`, {
    email,
    password,
  });

  const {token} = res.data

  return token;
}
