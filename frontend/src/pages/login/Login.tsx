import { useContext } from "react";
import { Redirect } from "react-router";
import { IsLoggedContext } from "../../App";
import AuthForm from "../../common/AuthForm";
import { loginService } from "../../services/login";

export default function Login() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);

  async function loginUser(email: string, password: string) {
    const res = await loginService(email, password);
    setIsLogged(true);
    return res.data;
  }

  if (isLogged) return <Redirect to="/feed" />;

  return <AuthForm title="Login" onSubmit={loginUser} />;
}
