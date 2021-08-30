import styled from "styled-components";

export const CentralContainer = styled.section`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-self: center;
  @media (max-width: 600px) {
    width: auto;
  }
`;
