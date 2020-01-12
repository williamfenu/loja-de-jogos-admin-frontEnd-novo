import React from "react";
import ReactDOM from "react-dom";
import Login from "./app/login/Login";
import App from "./App";
import PrivateRoute from "./commons/privateRoute/PrivateRoute";

import "./assets/css/reset.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import store from "../src/config/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/app" component={App} />
        {localStorage.getItem("token") ? (
          <Redirect from="/" to="/app" />
        ) : (
          <Redirect from="/" to="/login" />
        )}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
