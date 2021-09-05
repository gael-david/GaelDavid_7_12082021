import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { checkIfLogged } from "../../../helpers/auth";
import Button from "../buttons/Button";
import ButtonLink from "../buttons/ButtonLink";

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

const NavGroup = styled.div`
  display: flex;
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
      <Link to="/">
        <CompanyLogo src="/groupomania_icon.png" alt="Groupomania logo" />
      </Link>
      {isLogged ? (
        <Button onClick={logOut}>Logout</Button>
      ) : (
        <NavGroup>
          <ButtonLink to="/register">Register</ButtonLink>
          <ButtonLink primary to="/login">
            Login
          </ButtonLink>
        </NavGroup>
      )}
    </StyledNav>
  );
}
