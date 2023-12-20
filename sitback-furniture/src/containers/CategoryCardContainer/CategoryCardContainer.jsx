import React, { useEffect, useState } from "react";
import style from "./CategoryCardContainer.module.css";
import { fetchCategory } from "../../services/apiService";
import { homePageConstants } from "../../constants/homePageConstants";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

export const CategoryCardContainer = () => {
  const [catogories, setCatogories] = useState([]);

  useEffect(() => {
    fetchCategory().then((data) => {
      setCatogories(data);
    });
  }, []);

  const categoryCards = catogories?.map((card, index) => (
    <CategoryCard key={index} category={card} />
  ));
  return (
    <>
      <div className={style["category-cards-container"]}>
        <h1>{homePageConstants.CatogoriesHeading}</h1>
        <h2>{homePageConstants.CatogoriesSubHeading}</h2>
        <div className={style["category-card-container"]}>{categoryCards}</div>
      </div>
      <div className={style["copyright-container"]}>
        <h2>
          {homePageConstants.copyrights} {homePageConstants.currentYear}
        </h2>
      </div>
    </>
  );
};

export default CategoryCardContainer;
