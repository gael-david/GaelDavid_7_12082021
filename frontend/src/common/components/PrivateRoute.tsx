import { Component } from "react";
import { Redirect, Route } from "react-router";
import { checkIfLogged } from "../../helpers/auth";

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
        {component}
      </Route>
    );

  return redirectComponent ? (
    <Route path={path} {...props}>
      {redirectComponent}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
}
