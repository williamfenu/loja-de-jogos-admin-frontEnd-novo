import React from "react";
import SideBar from "./commons/components/sidebar/sidebar";
import { useSelector } from "react-redux";
import "./assets/css/base.css";

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
      <main className="base-main">{props.children}</main>
    </div>
  );
}

export default App;
