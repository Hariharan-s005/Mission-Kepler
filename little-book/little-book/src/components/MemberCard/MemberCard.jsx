import ImageNotFound from '../../assets/image-not-found.png';
import { apiConstants } from "../../constants/apiConstants";
import style from "./MemberCard.module.css";
export const MemberCard = ({name,photo,address}) => {
    const imageUrl = photo ? `${apiConstants.IMAGES_URL}${photo}` : ImageNotFound;
  return (
    
    <div className={style["member-card"]}>    
        <img src={imageUrl} alt={name} />
      <div className={style["member-details"]}>
        <h3 className={style["member-name"]}>{name}</h3>
        <h3 className={style["member-city"]}>{address.city}</h3>
      </div>
    </div>
  );
};
