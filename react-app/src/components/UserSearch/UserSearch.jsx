import styles from "./UserSearch.module.css";

const UserSearch = () => {
  return (
    <div className={styles["user-search"]}>
      <input
        type="text"
        placeholder="Search users"
        className={styles["user-search-input"]}
      ></input>
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default UserSearch;
