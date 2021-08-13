import AuthForm from "../../common/AuthForm";

const axios = require("axios").default;

export default function Register() {
  async function registerUser(email: string, password: string) {
    const res = await axios.post("http://localhost:4000/api/auth/register", {
      email,
      password,
    });

    return res;
  }

  return <AuthForm title="Register" onSubmit={registerUser} />;
}
