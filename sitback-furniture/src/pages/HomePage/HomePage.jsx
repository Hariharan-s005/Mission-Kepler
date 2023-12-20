import React from "react";
import Header from "../../components/Header/Header.jsx";
import CategoryCardContainer from "../../containers/CategoryCardContainer/CategoryCardContainer.jsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <CategoryCardContainer />
    </>
  );
};

export default HomePage;
