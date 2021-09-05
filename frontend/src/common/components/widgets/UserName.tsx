import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { User } from "../../../interfaces/User";

export const StyledUserName = styled.div`
  font-weight: 700;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  user: User;
};

export default function UserName({ user }: Props) {
  let history = useHistory();
  function redirectToUser(e: any) {
    e.stopPropagation();
    history.push(`/user/${user?.id}`);
  }

  if (!user) return null;

  return <StyledUserName onClick={redirectToUser}>{user?.username}</StyledUserName>;
}
