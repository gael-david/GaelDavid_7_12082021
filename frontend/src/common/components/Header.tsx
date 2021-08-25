import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { checkIfLogged } from "../../helpers/auth";
import Button from "./Button";

const CompanyLogo = styled.img`
  height: 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
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
          <Link to="/feed">
            <CompanyLogo src="/groupomania_icon.png" alt="Groupomania logo" />
          </Link>
          <Button onClick={logOut}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/feed">
            <CompanyLogo src="/groupomania_icon.png" alt="Groupomania logo" />
          </Link>
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </>
      )}
    </StyledNav>
  );
}
