import { useEffect, useState } from "react";
import MovieCTA from "../../components/MovieCTA/MovieCTA";
import { getMovies } from "../../services/videoService";
import { allMoviesPageConstants } from "../../constants/allMoviesPageConstants";
import style from "./AllMoviesSection.module.css";

export const AllMoviesSection = ({ onCardSelect, likes, incrementLikes }) => {
  const [movieCTACards, setMovieCTACards] = useState([]);
  const [displayLoadMoreButton, isDisplayLoadMoreButton] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const selectedCardHandler = (selectedCard) => {
    onCardSelect(selectedCard);
  };
  const movieCards = movieCTACards?.map((movie) => (
    <MovieCTA
      key={movie.id}
      movie={movie}
      onClick={selectedCardHandler}
      value={movie.id}
      likes={likes[movie.id] || 0}
      incrementLikes={() => incrementLikes(movie.id, movie)}
    />
  ));

  useEffect(() => {
    const getMoviesList = async () => {
      const movieCTACards = await getMovies(pageNumber);
      if (pageNumber === 1) {
        setMovieCTACards(movieCTACards);
        selectedCardHandler(movieCTACards[0]);
      } else {
        setMovieCTACards((previousCards) => [
          ...previousCards,
          ...movieCTACards,
        ]);
      }
    };
    isDisplayLoadMoreButton(true);
    getMoviesList();
  }, [pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <div className={style["all-movies-section"]}>
      <h2 className={style["page-title"]}>
        {allMoviesPageConstants.PAGE_TITLE}
      </h2>
      <div className={style["all-movies-container"]}>{movieCards}</div>
      {displayLoadMoreButton && (
        <button className={style["load-more-button"]} onClick={loadMoreHandler}>
          {allMoviesPageConstants.LOAD_MORE_BUTTON}
        </button>
      )}
    </div>
  );
};

export default AllMoviesSection;
