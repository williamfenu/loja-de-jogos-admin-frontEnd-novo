import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props => {
        if (localStorage.getItem("token")) return <Component {...props} />;
        else
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

export default PrivateRoute;
