import styles from "./UserSearch.module.css";
import { constants } from "../Constants/constants";
const UserSearch = () => {
  return (
    <div className={styles["user-search"]}>
      <div className={styles["search-icon-container"]}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <input
        type="text"
        placeholder={constants.searchBarPlaceholder}
        className={styles["user-search-input"]}
      ></input>
    </div>
  );
};

export default UserSearch;
