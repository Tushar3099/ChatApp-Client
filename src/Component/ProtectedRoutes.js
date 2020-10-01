import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.token);
  const isAuthenticated = token;
  console.log(token);
  const protectedRoutes = (props) =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );

  return <Route {...rest} render={protectedRoutes} />;
};

export default ProtectedRoutes;
