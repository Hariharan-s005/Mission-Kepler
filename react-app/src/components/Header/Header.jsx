import style from "./Header.module.css";
import { constants } from "../Constants/constants";
import { configurations } from "../Constants/config";
import UserSearch from "../UserSearch/UserSearch";
import Tab from "../Tab/Tab";
const Header = () => {
  const menuItems = configurations.menuItems.map((tab) => {
    return <Tab key={tab}>{tab}</Tab>;
  });
  return (
    <>
      <h1 className={style.navtext}>{constants.pageTitle}</h1>
      <div className={style.navbar}>
        <UserSearch />
        <menu className={style["menu-items"]}>{menuItems}</menu>
      </div>
    </>
  );
};

export default Header;
