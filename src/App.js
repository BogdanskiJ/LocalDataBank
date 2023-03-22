import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { MapProvinces } from "./maps/MapProvinces";
import { MapPoland } from "./maps/MapPoland";
import { Navigation } from "./common/Navigation";


export const App = () => {

  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/maps/Poland">
            <MapPoland />
          </Route>
          <Route path="/maps/provinces/:name">
            <MapProvinces />
          </Route>
          <Route path="/">
            <Redirect to="/maps/Poland" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;