import style from "./Users.module.css";
import Header from "../components/Header/Header";
import UserCard from "../components/UserCard/UserCard";
import UserData from "../data/data.json";
const Users = () => {
  const userList = UserData.map((data) => (
    <UserCard key={data.id} data={data} />
  ));
  return (
    <div className={style["users-page-wrapper"]}>
      <Header />
      <div className={style["user-card-container"]}>{userList}</div>
    </div>
  );
};

export default Users;
