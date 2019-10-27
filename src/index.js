import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./app/home/home";
import JogoForm from "./app/jogo/form/JogoForm";
import JogoLista from "./app/jogo/lista/JogoLista";
import ProdutoraForm from "./app/produtora/form/ProdutoraForm";
import ProdutoraLista from "./app/produtora/lista/ProdutoraList";

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
          <Route path="/jogo/novo" component={JogoForm}></Route>
          <Route path="/jogos" component={JogoLista}></Route>
          <Route path="/produtora/novo" component={ProdutoraForm}></Route>
          <Route path="/produtoras" component={ProdutoraLista}></Route>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
