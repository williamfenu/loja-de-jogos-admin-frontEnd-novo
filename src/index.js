import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./app/home/home";
import jogoForm from "./app/jogo/form/jogoForm";
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
          <Route exact path="/jogos/form" component={jogoForm}></Route>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
