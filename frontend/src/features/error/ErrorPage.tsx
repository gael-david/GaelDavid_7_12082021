import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ErrorContainer = styled.section`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: min-content;
  margin: auto;

  & svg {
    font-size: 5rem;
  }
`;

const ErrorText = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 11rem;
`;

type Props = {
  text?: string;
  icon?: IconProp;
};

export default function ErrorPage({
  text = "Oups, quelque chose n'a pas fonctionné !",
  icon = faExclamationCircle,
}: Props) {
  return (
    <ErrorContainer>
      <FontAwesomeIcon icon={icon} />
      <ErrorText>{text}</ErrorText>
    </ErrorContainer>
  );
}
