import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { User } from "../../../interfaces/User";

export const StyledUserPicture = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;

type Props = {
  user: User;
};

export default function UserPicture({ user }: Props) {
  let history = useHistory();

  function redirectToUser(e: any) {
    e.stopPropagation();
    history.push(`/user/${user?.id}`);
  }

  if (!user) return null;

  return <StyledUserPicture src={user?.image} onClick={redirectToUser} />;
}
