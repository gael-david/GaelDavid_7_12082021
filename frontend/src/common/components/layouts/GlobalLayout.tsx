import { Component } from "react";
import styled from "styled-components";

type Props = {
  children: Component;
};

const GlobalLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  justify-content: space-between;
`;

export default function GlobalLayout({ children }: Props) {
  return <GlobalLayoutStyle>{children}</GlobalLayoutStyle>;
}
