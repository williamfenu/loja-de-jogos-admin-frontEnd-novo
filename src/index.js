import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./app/home/home";
import GameForm from "./app/game/pages/GameForm";
import GameTable from "./app/game/pages/GameTable";
import DeveloperForm from "./app/developer/pages/DeveloperForm";
import DeveloperTable from "./app/developer/pages/DeveloperTable";

import "./assets/css/reset.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../src/config/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/jogo/novo" component={GameForm}></Route>
          <Route path="/jogos" component={GameTable}></Route>
          <Route path="/produtora/novo" component={DeveloperForm}></Route>
          <Route path="/produtoras" component={DeveloperTable}></Route>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
