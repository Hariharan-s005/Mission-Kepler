import styles from "./Tab.module.css";
const Tab = ({ children }) => {
  return (
    <li className={styles.li}>
      <button>{children}</button>
    </li>
  );
};

export default Tab;
