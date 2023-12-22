import React, { useEffect, useState } from "react";
import style from "./CategoryCardContainer.module.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Loader from "../../components/Loader/Loader";
import { fetchCategories } from "../../services/apiService";
import { homePageConstants } from "../../constants/homePageConstants";

export const CategoryCardContainer = () => {
  const [catogories, setCatogories] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShoppingCategories = async () => {
      try {
        const data = await fetchCategories();
        setCatogories(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchShoppingCategories();
  }, []);

  const categoryCards = catogories?.map((card) => (
    <CategoryCard key={card.id} category={card} />
  ));

  return (
    <>
      <div className={style["category-cards-container"]}>
        <h1>{homePageConstants.categoriesHeading}</h1>
        <h2>{homePageConstants.catogoriesSubHeading}</h2>

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
