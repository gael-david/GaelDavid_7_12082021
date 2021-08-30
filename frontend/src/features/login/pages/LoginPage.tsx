import { Redirect, useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { loginAPI } from "../../../api/login";
import { checkIfLogged } from "../../../helpers/auth";

export default function Login() {
  const history = useHistory();
  const isLogged = checkIfLogged();
  async function loginUser(email: string, password: string) {
    const token = await loginAPI(email, password);
    localStorage.setItem("token", token);
    history.push("/");
  }

  if (isLogged) return <Redirect to="/" />;

  return <LoginForm onSubmit={loginUser} />;
}
