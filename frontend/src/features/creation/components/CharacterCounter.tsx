import styled from "styled-components";

type Props = {
  textValue: string;
  maxCount: number;
};

type StyledProps = {
  isOverMax: boolean;
  isSoonMax: boolean;
};

const StyledCharacterCounter = styled.div<StyledProps>`
  font-size: 1.2rem;
  color: ${(props) => {
    if (props.isOverMax) return "red";
    if (props.isSoonMax) return "yellow";
  }};
`;

export default function CharacterCounter({ textValue, maxCount }: Props) {
  const count = textValue.length;

  const remainingCharacters = maxCount - count;

  const isSoonMax = remainingCharacters < 30;
  const isOverMax = remainingCharacters === 0;

  return (
    <StyledCharacterCounter isOverMax={isOverMax} isSoonMax={isSoonMax}>
      {remainingCharacters}
    </StyledCharacterCounter>
  );
}
