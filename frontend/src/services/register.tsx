import axios from "axios";
import { loginService } from "./login";

export async function registerService(email: string, password: string) {
  try {
    await axios.post("http://localhost:4000/api/auth/register", {
      email,
      password,
    });

    const res = await loginService(email, password);

    return res.data;
  } catch (error) {
    return error;
  }
}
