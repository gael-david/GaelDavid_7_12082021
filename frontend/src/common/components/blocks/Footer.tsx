import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError } from "axios";
import { useState } from "react";
import styled from "styled-components";
import { deleteUserAPI } from "../../../api/deleteUser";
import { checkIfLogged } from "../../../helpers/auth";

const StyledFooter = styled.footer`
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & small {
    font-size: 80%;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default function Footer() {
  const [error, setError] = useState<AxiosError>(null);
  const isLogged = checkIfLogged();

  async function onDeleteAccount() {
    try {
      await deleteUserAPI();
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error: any) {
      setError(error?.response?.data?.message);
    }
  }

  return (
    <StyledFooter>
      <span>©Groupomania - 2021</span>
      {isLogged && (
        <small onClick={onDeleteAccount}>
          <FontAwesomeIcon icon={faUserTimes} style={{ marginRight: 5 }} />
          Delete your account
        </small>
      )}
      {error && <div>{error}</div>}
    </StyledFooter>
  );
}
