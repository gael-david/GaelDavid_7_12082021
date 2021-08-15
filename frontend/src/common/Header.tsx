import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IsLoggedContext } from "../App";

const StyledNav = styled.nav`
  display: flex;
  height: 80px;
  align-items: center;
  gap: 1rem;
`;

export default function Header() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);

  function logOut() {
    setIsLogged(false);
    localStorage.removeItem("token");
  }

  return (
    <StyledNav>
      {isLogged ? (
        <>
          <Link to="/feed">Groupomania</Link>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/">Groupomania</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </StyledNav>
  );
}
