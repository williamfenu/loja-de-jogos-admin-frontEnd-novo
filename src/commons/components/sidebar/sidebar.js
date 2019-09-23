import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import "./style.css";

const menus = [
  {
    to: "/",
    label: "home",
    icon: <FaHome />
  },
  {
    to: "#",
    label: "Jogos Cadastrados",
    icon: <FaGamepad />
  },
  {
    to: "/jogos/form",
    label: "Cadastrar Jogo",
    icon: <FaListAlt />
  },
  {
    to: "#",
    label: "Sair",
    icon: <IoIosLogOut />
  }
];

const SideBar = props => {
  const dispatcher = useDispatch();

  return (
    <div className="sidebar-container">
      <button
        htmlFor="chkbox"
        className={`buttonMenu ${
          props.menuState.openedMenu
            ? "buttonMenuExpanded"
            : "buttonMenuCompressed"
        }`}
        onClick={() =>
          dispatcher({ type: "MENU_ACTION", menuState: !props.menuState })
        }
      >
        {props.menuState.openedMenu ? (
          <FaArrowLeft className="icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </button>
      <nav className="barra-navegacao">
        <ul>
          {menus.map((menu, index) => (
            <Link key={index} to={menu.to}>
              <li>{props.menuState.openedMenu ? menu.label : menu.icon}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
