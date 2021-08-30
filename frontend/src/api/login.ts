import axios from "axios";
import { BASE_URL } from "../helpers/variables";

export async function loginAPI(email: string, password: string) {
  const res = await axios.post(`${BASE_URL}/api/auth/login`, {
    email,
    password,
  });

  const token = res?.data?.token;

  return token;
}
