import { Component } from "react";
import { Route } from "react-router";

type Props = {
  path: string;
  component: Component;
};

export function PublicRoute({ path, component, ...props }: Props) {
  return (
    <Route path={path} {...props}>
      {component}
    </Route>
  );
}
