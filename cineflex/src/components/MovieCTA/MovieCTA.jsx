import { BsFillHandThumbsUpFill } from "react-icons/bs";
import style from "./MovieCTA.module.css";

export const MovieCTA = ({ movie, onClick, likes, incrementLikes}) => {

  return (
    <div className={style["cta-card"]}>
      <div
        className={style["movie-poster-container"]}
        onClick={() => onClick(movie)}
      >
        <img src={movie.link} alt={movie.title} />
      </div>
      <div className={style["title-like-container"]}>
        <h2 className={style["movie-title"]}>{movie.movie}</h2>
        <span onClick={incrementLikes} className={style["like-button-container"]}>
          <BsFillHandThumbsUpFill />
        </span>
      </div>
      <h4 className={style["movie-likes"]}>{likes===0?movie.likes:likes}</h4>
    </div>
  );
};

export default MovieCTA;
