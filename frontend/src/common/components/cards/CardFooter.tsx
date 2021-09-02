import { faComment as farComment, faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledPostFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ActionButton = styled.div`
  flex: 1;
  padding: 1rem 0;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #30465d;
  }
`;

export default function PostFooter() {
  return (
    <StyledPostFooter>
      <ActionButton>
        <FontAwesomeIcon icon={farThumbsUp} />
        J'aime
      </ActionButton>
      <ActionButton>
        <FontAwesomeIcon icon={farComment} />
        Commenter
      </ActionButton>
    </StyledPostFooter>
  );
}
