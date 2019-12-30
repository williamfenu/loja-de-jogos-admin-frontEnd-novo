import React from "react";
import SideBar from "./commons/components/sidebar/sidebar";
import { useSelector } from "react-redux";
import "./assets/css/base.css";
import Home from "./app/home/Home";
import GameForm from "./app/game/pages/GameForm";
import GameTable from "./app/game/pages/GameTable";
import DeveloperForm from "./app/developer/pages/DeveloperForm";
import DeveloperTable from "./app/developer/pages/DeveloperTable";
import { Route, Switch } from "react-router-dom";

function App(props) {
  const menuState = useSelector(state => state.menuState);
  return (
    <div className="base-container">
      <aside
        className={
          menuState.openedMenu ? "base-aside-expanded" : "base-aside-compressed"
        }
      >
        <SideBar menuState={menuState} />
      </aside>
      <main className="base-main">
        <Switch>
          <Route path="/app/jogo/novo" component={GameForm} />
          <Route path="/app/jogos" component={GameTable} />
          <Route path="/app/produtora/novo" component={DeveloperForm} />
          <Route path="/app/produtoras" component={DeveloperTable} />
          <Route path="/app" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
