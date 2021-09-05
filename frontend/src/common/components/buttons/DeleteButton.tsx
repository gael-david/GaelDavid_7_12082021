import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDeleteButton = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background: #30465d;
  }
`;

type Props = {
  onDelete: (e: any) => void;
};

export default function DeleteButton({ onDelete }: Props) {
  return (
    <StyledDeleteButton title="Delete">
      <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
    </StyledDeleteButton>
  );
}
