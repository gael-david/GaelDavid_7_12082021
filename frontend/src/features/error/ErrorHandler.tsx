import { faExclamation, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { AxiosError } from "axios";
import ErrorPage from "./ErrorPage";

type Props = {
  error: AxiosError;
};

export default function Error({ error }: Props) {
  console.log("this is our error: ", error);
  console.log(error.response);

  const { status } = error.response;

  if (status === 401) return <ErrorPage text="Vous n'êtes pas autorisé à visiter cette page" icon={faUser} />;

  if (status === 404) return <ErrorPage text="Désolé, on dirait que cette page n'existe pas !" icon={faTimes} />;

  return <ErrorPage text="Oups, quelque chose n'a pas fonctionné !" icon={faExclamation} />;
}
