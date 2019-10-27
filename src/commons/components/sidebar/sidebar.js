import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaListAlt,
  FaBuilding,
  FaGamepad,
  FaHome,
  FaArrowLeft,
  FaBars
} from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Collapse } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./style.css";

const submenus = {
  jogo: [
    {
      id: 1,
      to: "/jogos",
      label: "Jogos Cadastrados",
      icon: <FaGamepad />
    },
    {
      id: 2,
      to: "/jogo/novo",
      label: "Cadastrar Jogo",
      icon: <FaListAlt />
    }
  ],
  produtora: [
    {
      id: 3,
      to: "/produtoras",
      label: "Produtoras Cadastradas",
      icon: <FaBuilding />
    },
    {
      id: 4,
      to: "/produtora/novo",
      label: "Cadastrar Produtoras",
      icon: <FaBuilding />
    }
  ]
};

const menus = [
  {
    id: 1,
    to: "/",
    label: "home",
    icon: <FaHome />
  },
  {
    id: 2,
    label: "Jogos",
    icon: <FaGamepad />,
    submenu: submenus.jogo
  },

  {
    id: 3,
    label: "Produtoras",
    icon: <FaBuilding />,
    submenu: submenus.produtora
  },

  {
    id: 4,
    to: "#",
    label: "Sair",
    icon: <MdExitToApp />
  }
];

const SideBar = props => {
  const [collapse, setCollapse] = useState({ Jogos: false, Produtoras: false });
  const [dropdown, setDropdown] = useState({ Jogos: false, Produtoras: false });
  const dispatcher = useDispatch();

  const onChangeCollapse = name => {
    setCollapse({ [name]: !collapse[name] });
  };

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
          dispatcher({
            type: "TOGGLE_MENU",
            openedMenu: !props.menuState
          })
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
          {menus.map(menu =>
            menu.submenu ? (
              props.menuState.openedMenu ? (
                <React.Fragment key={menu.id}>
                  <li
                    className="link"
                    onClick={() => onChangeCollapse(menu.label)}
                  >
                    {menu.label}
                  </li>
                  <Collapse isOpen={collapse[menu.label]}>
                    {menu.submenu.map(submenu => (
                      <Link key={submenu.id} to={submenu.to}>
                        <li>{submenu.label}</li>
                      </Link>
                    ))}
                  </Collapse>
                </React.Fragment>
              ) : (
                <li
                  className="link"
                  onMouseOver={() => setDropdown({ [menu.label]: true })}
                  onMouseLeave={() => setDropdown({ [menu.label]: false })}
                >
                  <Dropdown
                    className="personalizedDropdown"
                    direction="right"
                    isOpen={dropdown[menu.label]}
                  >
                    <DropdownToggle className="personalizedDropdownToggle">
                      {menu.icon}
                    </DropdownToggle>
                    <DropdownMenu>
                      {menu.submenu.map(submenu => (
                        <Link key={submenu.id} to={submenu.to}>
                          <DropdownItem>{submenu.label}</DropdownItem>
                        </Link>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </li>
              )
            ) : (
              <Link key={menu.id} to={menu.to}>
                <li>{props.menuState.openedMenu ? menu.label : menu.icon}</li>
              </Link>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
