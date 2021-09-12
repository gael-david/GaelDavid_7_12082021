import styled, { css } from "styled-components";
import CSS from "csstype";

export type StyledProps = {
  $primary?: boolean;
};

export const baseButtonStyle = css<StyledProps>`
  font-size: 1.6rem;
  width: min-content;
  padding: 1rem 2rem;
  height: 4rem;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.$primary ? "#E94425" : "#30465d")};
  color: white;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: auto;
    background: #e9422563;
    color: #192734;
  }
`;

const StyledButton = styled.button<StyledProps>`
  ${baseButtonStyle}
`;

type Props = {
  onClick: () => unknown;
  children?: React.ReactNode;
  disabled?: boolean;
  primary?: boolean;
  style?: CSS.Properties;
};

export default function Button({ onClick, children, primary = false, disabled = false, style, ...props }: Props) {
  return (
    <StyledButton onClick={onClick} $primary={primary} style={style} {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
