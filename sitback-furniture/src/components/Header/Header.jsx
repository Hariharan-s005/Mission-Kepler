import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import style from './Header.module.css';
import { navLinks} from '../../constants/navLinksConstants';
import { headerConstants } from '../../constants/headerConstants';
import {navigationConstants} from '../../constants/navigationConstants';
export const Header = () => {
  const navItems = navLinks?.map((navItem) => {
    return (
      <button className={style["nav-button"]} key={navItem.NAME}>
        <NavLink
          to={navItem.url}
          className={({ isActive }) => (isActive ? style["active-tab"] : "")}
        >
          {navItem.NAME}
        </NavLink>
      </button>
    );
  });

  return (
    <header className={style["nav-bar"]}>
      <Link to={navigationConstants.backSlash}>
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
