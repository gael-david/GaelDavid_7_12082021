import { Redirect, useHistory } from "react-router-dom";
import { registerAPI } from "../../api/register";
import { checkIfLogged } from "../../helpers/auth";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const history = useHistory();
  const isLogged = checkIfLogged();

  async function registerUser(username: string, email: string, password: string) {
    const token = await registerAPI(username, email, password);
    localStorage.setItem("token", token);
    history.push("/");
  }

  if (isLogged) return <Redirect to="/" />;

  return <RegisterForm onSubmit={registerUser} />;
}
