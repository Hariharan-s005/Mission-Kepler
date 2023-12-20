import React from "react";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { navLinks} from "../../constants/navLinksConstants";
import { headerConstants } from "../../constants/headerConstants";

export const Header = () => {
  const navItems = navLinks?.map((navItem, index) => {
    return (
      <button className={style["nav-button"]} key={index}>
        <NavLink
          to={navItem.URL}
          className={({ isActive }) => (isActive ? style["active-tab"] : "")}
        >
          {navItem.NAME}
        </NavLink>
      </button>
    );
  });

  return (
    <header className={style["nav-bar"]}>
      <Link to={"/"}>
        <h2 className={style["sitback-logo"]}>{headerConstants.headerName}</h2>
      </Link>
      <div className={style["nav-item-container"]}>{navItems}</div>
      <div className={style["user-name-container"]}>
        <h4>{headerConstants.userName} </h4>
        <div className={style["caret-down-icon"]}>
          <FaCaretDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
