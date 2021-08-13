import { useContext } from "react";
import { Redirect } from "react-router";
import { IsLoggedContext } from "../../App";
import AuthForm from "../../common/AuthForm";
import { registerService } from "../../services/register";

export default function Register() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);

  async function registerUser(email: string, password: string) {
    const res = await registerService(email, password);
    setIsLogged(true);
    return res.data;
  }

  if (isLogged) return <Redirect to="/feed" />;

  return <AuthForm title="Register" onSubmit={registerUser} />;
}
