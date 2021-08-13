import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IsLoggedContext } from "../App";

export default function Header() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);

  function logOut() {
    setIsLogged(false);
    localStorage.removeItem("token");
  }

  return (
    <nav>
      {isLogged ? (
        <>
          <Link to="/feed">Feed</Link>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}
