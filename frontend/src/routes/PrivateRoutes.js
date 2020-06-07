import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkTokenExpration } from "../helper/checkTokenExpration";
const PrivateRoutes = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        if (checkTokenExpration()) {
          return <Component></Component>;
        } else {
          return <Redirect to="/auth/login"></Redirect>;
        }
      }}
    ></Route>
  );
};

export default PrivateRoutes;
