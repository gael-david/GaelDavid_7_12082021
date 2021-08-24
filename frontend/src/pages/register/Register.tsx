import { Redirect, useHistory } from "react-router-dom";
import AuthForm from "../../common/components/AuthForm";
import { registerAPI } from "../../api/register";
import { checkIfLogged } from "../../helpers/auth";

export default function Register() {
  const history = useHistory();
  const isLogged = checkIfLogged();

  async function registerUser(email: string, password: string) {
    const token = await registerAPI(email, password);
    localStorage.setItem("token", token);
    history.push("/");
  }

  if (isLogged) return <Redirect to="/" />;

  return <AuthForm title="Register" onSubmit={registerUser} />;
}
