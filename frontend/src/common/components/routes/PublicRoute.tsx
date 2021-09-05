import { Component } from "react";
import { Route } from "react-router";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";

type Props = {
  path: string;
  component: Component;
};

export function PublicRoute({ path, component, ...props }: Props) {
  return (
    <Route path={path} {...props}>
      <Header />
      {component}
      <Footer />
    </Route>
  );
}
