import style from "./Header.module.css";
import UserSearch from "../UserSearch/UserSearch";
import Tab from "../Tab/Tab";
const Header = () => {
  return (
    <>
      <h1 className={style.navtext}>Users</h1>
      <div className={style.navbar}>
        <div className={style["user-search-container"]}>
          <UserSearch />
        </div>
        <menu className={style["menu-items"]}>
          <Tab>Reputation</Tab>
          <Tab>New users</Tab>
          <Tab>Voters</Tab>
          <Tab>Editors</Tab>
          <Tab>Moderators</Tab>
        </menu>
      </div>
    </>
  );
};

export default Header;
