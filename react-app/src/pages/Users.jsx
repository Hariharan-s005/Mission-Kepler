import style from "./Users.module.css";
import Header from "../components/Header/Header";
import UserCard from "../components/UserCard/UserCard";
import UserData from "../data/data.json";
const Users = () => {
  const userList = UserData.map((data, index) => (
    <UserCard key={index} data={data} />
  ));
  return (
    <>
      <Header />
      <div className={style["user-card-container"]}>{userList}</div>
    </>
  );
};

export default Users;
