import { Component } from "react";
import { Redirect, Route } from "react-router";
import { checkIfLogged } from "../../../helpers/auth";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";

type Props = {
  component: Component;
  redirectComponent?: Component;
  path: string;
  redirectPath?: string;
};

export function PrivateRoute({ path, redirectPath = "/login", component, redirectComponent, ...props }: Props) {
  const isLogged = checkIfLogged();

  if (isLogged)
    return (
      <Route path={path} {...props}>
        <Header />
        {component}
        <Footer />
      </Route>
    );

  return redirectComponent ? (
    <Route path={path} {...props}>
      <Header />
      {redirectComponent}
      <Footer />
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
}
