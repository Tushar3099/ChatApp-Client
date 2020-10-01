import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const UnProtectedRoutes = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.token);
  const isAuthenticated = token;

  const unprotectedRoutes = (props) =>
    !isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );

  return <Route {...rest} render={unprotectedRoutes} />;
};

export default UnProtectedRoutes;
