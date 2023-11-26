import style from "./UserCard.module.css";
import UserProfilePicture from "../UserProfilePicture/UserProfilePicture";
import Tag from "../Tag/Tag";

const UserCard = ({ data = {} }) => {
  return (
    <div className={style["user-card"]}>
      <div className={style["user-details-container"]}>
        <div className={style["profile-picture-container"]}>
          <UserProfilePicture
            src={data.src}
            alt={data.name + " 's profile picture"}
          />
        </div>
        <div className={style["user-details"]}>
          <h2>{data.name}</h2>
          <h3>{data.place}</h3>
          <Tag tags={data.tags} />
        </div>
      </div>
    </div>
  );
};
export default UserCard;
