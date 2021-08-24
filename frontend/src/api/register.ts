import axios from "axios";
import { baseUrl } from "../helpers/variables";
import { loginAPI } from "./login";

export async function registerAPI(email: string, password: string) {
  try {
    await axios.post(`${baseUrl}/api/auth/register`, {
      email,
      password,
    });

    const res = await loginAPI(email, password);
    const {token} = res.data;
    return token;
  } catch (error) {
    return error;
  }
}
