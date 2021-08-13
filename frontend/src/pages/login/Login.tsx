import AuthForm from "../../common/AuthForm";

const axios = require("axios").default;

export default function Login() {
  async function loginUser(email: string, password: string) {
    const res = await axios.post("http://localhost:4000/api/auth/login", {
      email,
      password,
    });
    return res;
  }

  return <AuthForm title="Login" onSubmit={loginUser} />;
}
