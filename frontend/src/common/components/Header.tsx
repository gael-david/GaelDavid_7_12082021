import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { checkIfLogged } from "../../helpers/auth";

const StyledNav = styled.nav`
  display: flex;
  height: 80px;
  align-items: center;
  gap: 1rem;
`;

export default function Header() {
  const history = useHistory();
  const isLogged = checkIfLogged();

  function logOut() {
    localStorage.removeItem("token");
    history.push("/");
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
