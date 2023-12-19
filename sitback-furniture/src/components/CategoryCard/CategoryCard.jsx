import React from "react";
import style from "./CategoryCard.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { buttonNames } from "../../constants/constants";

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(`/categories/${category.id}`);
  };

  return (
    <>
      <div className={style["category-card"]}>
        <img src={category?.photo} />
        <h2>{category?.category}</h2>
        <p>{category?.description}</p>
        <Button
          style={style["shop-now-button"]}
          onClick={navigateToCategory}
          name={buttonNames.SHOP_NOW}
        ></Button>
      </div>
    </>
  );
};

export default CategoryCard;
