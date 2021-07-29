import React,  { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import News from './components/News'
import Lol from "./components/Lol";
import Apex from "./components/Apex";
import Valorant from "./components/Valorant";
import Rl from "./components/Rl";
import Csgo from "./components/Csgo";
import Boutique from "./Boutique/Index";
import Connection from "./components/Connection";
import Register from "./components/Register";
import LolStat from "./components/LolStat";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Connection />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/lol">
          <Lol/>
        </Route>
        <Route exact path="/lol/:id">
          <LolStat/>
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/boutique">
          <Boutique/>
        </Route>
        <Route exact path="/parametres">
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
