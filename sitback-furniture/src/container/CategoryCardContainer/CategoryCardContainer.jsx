import React, { useEffect, useState } from "react";
import style from "./CategoryCardContainer.module.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { fetchCategory } from "../../service/ApiService";
import { catogoriesPageConstants } from "../../constants/constants";

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
        <h1>{catogoriesPageConstants.CatogoriesHeading}</h1>
        <h2>{catogoriesPageConstants.CatogoriesSubHeading}</h2>
        <div className={style["category-card-container"]}>{categoryCards}</div>
      </div>
      <div className={style["copyright-container"]}>
        <h2>{catogoriesPageConstants.copyrights}</h2>
      </div>
    </>
  );
};

export default CategoryCardContainer;
