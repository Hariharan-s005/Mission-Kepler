import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./CategoryCard.module.css";
import Button from "../Button/Button";
import { navigationConstants } from "../../constants/navigationConstants";
import { buttonConstants } from "../../constants/buttonConstants";
import missingImage from "../../assets/default-image.jpeg";

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate(
      `${navigationConstants.backSlash}${navigationConstants.categories}${navigationConstants.backSlash}${category.id}`
    );
  };
  const missingImageHandler = (event) => {
    event.target.src = missingImage;
  };
  return (
    <>
      <div className={style["category-card"]}>
        <img
          src={category?.photo}
          alt={category?.category}
          onError={missingImageHandler}
        />
        <h2>{category?.category}</h2>
        <p>{category?.description}</p>
        <Button
          style={style["shop-now-button"]}
          onClick={navigateToCategory}
          name={buttonConstants.SHOP_NOW}
        ></Button>
      </div>
    </>
  );
};

export default CategoryCard;
