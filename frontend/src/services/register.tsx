import axios from "axios";
import { loginService } from "./login";

export async function registerService(email: string, password: string) {
  try {
    await axios.post("http://localhost:4000/api/auth/register", {
      email,
      password,
    });

    await loginService(email, password);
  } catch (error) {
    return error;
  }
}
