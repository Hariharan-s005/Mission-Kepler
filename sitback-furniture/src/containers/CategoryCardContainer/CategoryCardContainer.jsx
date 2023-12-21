import React, { useEffect, useState } from "react";
import style from "./CategoryCardContainer.module.css";
import { fetchCategory } from "../../services/apiService";
import { homePageConstants } from "../../constants/homePageConstants";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Loader from "../../components/Loader/Loader";

export const CategoryCardContainer = () => {
  const [catogories, setCatogories] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCategory().then((data) => {
      setCatogories(data);
      setIsLoading(false);
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

        {isloading ? (
          <Loader />
        ) : (
          <div className={style["category-card-container"]}>
            {categoryCards}
          </div>
        )}
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
