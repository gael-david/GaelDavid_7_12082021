import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid rgb(56, 68, 77);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #192734;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const CardUser = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  width: fit-content;
`;

export const CardImage = styled.img`
  border: 1px solid rgb(56, 68, 77);
  max-height: 30rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;
