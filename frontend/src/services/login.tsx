import axios from "axios";

export async function loginService(email: string, password: string) {
  const res = await axios.post("http://localhost:4000/api/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
}
