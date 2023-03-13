import React from "react";
import { HashRouter, Link, Redirect, Route, Routes, Switch } from "react-router-dom";
import { Maps } from "./maps";
import { MapPolska } from "./maps/MapPolska";
import { MapOpolskie } from "./maps/province/MapOpolskie"
import { MapDolnoslaskie } from "./maps/province/MapDolnoslaskie"
import { MapMazowieckie } from "./maps/province/MapMazowieckie";
import { MapKujawskoPomorskie } from "./maps/province/MapKujawskopomorskie";
import { MapPodlaskie } from "./maps/province/MapPodlaskie";
import { MapLubuskie } from "./maps/province/MapLubuskie";
import { MapZachodnioPomorskie } from "./maps/province/MapZachodniopomorskie";
import { MapPomorskie } from "./maps/province/MapPomorskie";
import { MapWarminskoMazurskie } from "./maps/province/MapWarminsko-mazurskie";
import { MapWielkopolskie } from "./maps/province/MapWielkopolskie";
import { MapLodzkie } from "./maps/province/MapLodzkie";
import { MapSlaskie } from "./maps/province/MapSlaskie";
import { MapMalopolskie } from "./maps/province/MapMalopolskie";
import { MapSwietokrzyskie } from "./maps/province/MapSwietokrzyskie";
import { MapPodkarpackie } from "./maps/province/MapPodkarpackie";
import { MapLubelskie } from "./maps/province/MapLubelskie";










export const App = () => {

  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/maps/Poland">
            <MapPolska />
          </Route>
          <Route path="/maps/provinces/Opolskie">
            <MapOpolskie />
          </Route>
          <Route path="/maps/provinces/Dolnoslaskie">
            <MapDolnoslaskie />
          </Route>
          <Route path="/maps/provinces/Lubuskie">
            <MapLubuskie />
          </Route>
          <Route path="/maps/provinces/Zachodniopomorskie">
            <MapZachodnioPomorskie />
          </Route>
          <Route path="/maps/provinces/Pomorskie">
            <MapPomorskie />
          </Route>
          <Route path="/maps/provinces/Warminsko-mazurskie">
            <MapWarminskoMazurskie />
          </Route>
          <Route path="/maps/provinces/Podlaskie">
            <MapPodlaskie />
          </Route>
          <Route path="/maps/provinces/Mazowieckie">
            <MapMazowieckie />
          </Route>
          <Route path="/maps/provinces/Kujawskopomorskie">
            <MapKujawskoPomorskie />
          </Route>
          <Route path="/maps/provinces/Wielkopolskie">
            <MapWielkopolskie />
          </Route>
          <Route path="/maps/provinces/Lodzkie">
            <MapLodzkie />
          </Route>
          <Route path="/maps/provinces/Slaskie">
            <MapSlaskie />
          </Route>
          <Route path="/maps/provinces/Malopolskie">
            <MapMalopolskie />
          </Route>
          <Route path="/maps/provinces/Swietokrzyskie">
            <MapSwietokrzyskie />
          </Route>
          <Route path="/maps/provinces/Podkarpackie">
            <MapPodkarpackie />
          </Route>
          <Route path="/maps/provinces/Lubelskie">
            <MapLubelskie />
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