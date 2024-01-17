import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { loginContext } from '../../contexts/login-context';
import logo from "../../assets/logo.png";
import { navBarSectionConstants,navBarItemsConstants } from "../../constants/navBarSectionConstants";
import { navigationConstants } from "../../constants/navigationConstants";
import { buttonConstants } from "../../constants/buttonConstants";
import style from "./NavBar.module.css";
import { navBarUserConstants } from "../../constants/navBarUserConstants";

export const NavBar = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const { loginStatus, setLoginStatus } = useContext(loginContext);

  const logoutHandler = () => {
    setLoginStatus({ isLoggedIn: false, name: "" });
    navigate(navigationConstants.backSlash);
    localStorage.removeItem("userName");
  };

  const navBarSections = navBarSectionConstants?.map((navSection) => {
    return (
      <button className={style["nav-section"]} key={navSection.NAME}>
        <NavLink
          to={navSection.url}
          className={({ isActive }) => (isActive ? style["active-menu"] : "")}
        >
          {navSection.NAME}
        </NavLink>
      </button>
    );
  });
  return (
    <header className={style["nav-bar"]}>
      <Link to={navigationConstants.backSlash}>
        <div className={style["logo-container"]}>
          <img src={logo} alt={navBarItemsConstants.logoAlt}/>
        </div>
      </Link>
      {location.pathname !==
      `${navigationConstants.backSlash}${navigationConstants.login}`&& (
        <>
          <div className={style["nav-section-items"]}>
            {navBarSections}
            {loginStatus.isLoggedIn && (
              <button>
                <NavLink
                  to={`${navigationConstants.backSlash}${navigationConstants.nowShowing}`}
                  className={({ isActive }) =>
                    isActive ? style["active-menu"] : ""
                  }
                >
                  {navBarItemsConstants.nowShowing}
                </NavLink>
              </button>
            )}
          </div>
          {loginStatus.isLoggedIn ? (
            <>
            <div className={style["logout-container"]}>
            <div className={style["user-name-container"]}>{`${navBarUserConstants.greet} ${loginStatus.name} ${navBarUserConstants.separator}`}</div>
            <button 
              onClick={logoutHandler}>
              {buttonConstants.logoutButton}   
            </button>
            </div>
            </>
          ) : (
            <button   
              onClick={() =>
                navigate(
                  `${navigationConstants.backSlash}${navigationConstants.login}`
                )
              }>
                {buttonConstants.loginButton}
            </button>
          )}
        </>
      )}

    </header>
  );
};

export default NavBar;
