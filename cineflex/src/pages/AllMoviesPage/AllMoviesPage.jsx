import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AllMoviesSection from "../../containers/AllMoviesSection/AllMoviesSection";
import style from "./AllMoviesPage.module.css";
import MovieDescriptionSection from "../../containers/MovieDescriptionSection/MovieDecriptionSection";

export const AllMoviesPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [likes, setLikes] = useState({});
  
  const handleCardSelection = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  const incrementLikes = (cardId,card) => {
    setLikes((prevLikes) => {
       if(isNaN((card?.likes+1)))
         card=selectedCard;
      const newLikes = { ...prevLikes, [cardId]: (prevLikes[cardId] || parseInt(card?.likes)) + 1 };
      return newLikes;
    });
  };
  return (
    <>
      <NavBar />
    <div className={style["all-movies-page-container"]}>
        <AllMoviesSection
          onCardSelect={handleCardSelection}
          likes={likes}
          incrementLikes={incrementLikes}
        />
        <MovieDescriptionSection
          selectedCard={selectedCard}
          likes={likes[selectedCard?.id]}
          incrementLikes={() => incrementLikes(selectedCard?.id)}
        />
      </div>
    </>
  );
};

export default AllMoviesPage;
