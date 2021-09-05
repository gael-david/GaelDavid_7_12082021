import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Footer() {
  return <StyledFooter>©Groupomania - 2021</StyledFooter>;
}
