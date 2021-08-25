import styled from "styled-components";
import CSS from "csstype";

type StyledProps = {
  primary?: boolean;
};

const StyledButton = styled.button<StyledProps>`
  font-size: 1.6rem;
  width: min-content;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.primary ? "rgb(0, 186, 124)" : "#30465d")};
  color: white;
  white-space: nowrap;
`;

type Props = {
  onClick: () => unknown;
  children: JSX.Element | string;
  disabled?: boolean;
  primary?: boolean;
  style?: CSS.Properties;
};

export default function Button({ onClick, children, primary = false, disabled = false, style, ...props }: Props) {
  return (
    <StyledButton onClick={onClick} primary={primary} style={style} {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
