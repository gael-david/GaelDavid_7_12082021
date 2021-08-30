import axios from "axios";
import { BASE_URL } from "../helpers/variables";
import { loginAPI } from "./login";

export async function registerAPI(username: string, email: string, password: string) {
  try {
    await axios.post(`${BASE_URL}/api/auth/register`, {
      username,
      email,
      password,
    });

    const token = await loginAPI(email, password);

    return token;
  } catch (error) {
    return error;
  }
}
