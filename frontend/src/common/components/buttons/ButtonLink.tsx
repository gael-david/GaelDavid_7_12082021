import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseButtonStyle } from "./Button";
import CSS from "csstype";

const StyledButtonLink = styled(Link)`
  ${baseButtonStyle}
`;

type Props = {
  to: string;
  children?: React.ReactNode;
  primary?: boolean;
  style?: CSS.Properties;
};

export default function Button({ to, children, primary = false, style, ...props }: Props) {
  return (
    <StyledButtonLink to={to} primary={primary} style={style} {...props}>
      {children}
    </StyledButtonLink>
  );
}
