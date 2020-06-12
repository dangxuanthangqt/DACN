import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { privateRoutes, publicRoutes } from "./routeConfigs";
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/overview"></Redirect>
      {publicRoutes.map((element, index) => {
        let temp = element.subroutes.map((e, i) => e.path);
        return (
          <Route
            key={index}
            exact={element.subroutes.some((r) => r.exact)}
            path={temp}
          >
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => (
                  <PublicRoutes {...element}></PublicRoutes>
                ))}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRoutes.map((element, index) => {
        let temp = element.subroutes.map((e, i) => e.path);
        return (
          <Route
            key={index}
            exact={element.subroutes.some((r) => r.exact)}
            path={temp}
          >
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => (
                  <PrivateRoutes {...element}></PrivateRoutes>
                ))}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      <Route
        path="*"
        render={() => <Redirect to="/errors/error-404"></Redirect>}
      ></Route>
    </Switch>
  );
};

export default Routes;
