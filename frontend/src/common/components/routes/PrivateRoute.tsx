import { Component } from "react";
import { Redirect, Route } from "react-router";
import { checkIfLogged } from "../../../helpers/auth";
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
      </Route>
    );

  return redirectComponent ? (
    <Route path={path} {...props}>
      <Header />
      {redirectComponent}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
}
