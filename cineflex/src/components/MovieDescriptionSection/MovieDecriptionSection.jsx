import React, { useState, useEffect, useMemo } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import Loader from "../Loader/Loader";
import withAdvertisement from "../../HOC/withAdvertisement";
import {
  getRandomMovieAdvertisement,
  getFormatedTimeString,
} from "../../utils/advertisement-utils";
import { allMoviesPageConstants } from "../../constants/allMoviesPageConstants";
import style from "./MovieDescriptionSection.module.css";
import { advertisementConstants } from "../../constants/advertisementConstants";

export const MovieDescriptionSection = ({
  selectedCard,
  likes,
  incrementLikes,
  timer,
  message,
  showAdvertisement,
  showStatus,
  advertisementHandler,
  stopAdvertisement,
}) => {
  const cachedAd = useMemo(() => getRandomMovieAdvertisement(), []);
 

  useEffect(() => {
    let interval;
    
    if (message === "" && timer === 0) {
      advertisementHandler(false, 3, advertisementConstants.ADVERTISEMENT_INFO);
    } else if (message === advertisementConstants.ADVERTISEMENT_INFO && timer > 0) {
      interval = setInterval(() => {
        advertisementHandler(false, timer - 1, advertisementConstants.ADVERTISEMENT_INFO);
      }, 1000);
    } else if (message === advertisementConstants.ADVERTISEMENT_INFO && timer === 0) {
      advertisementHandler(true, 5, advertisementConstants.TEASER_INFO);
    } else if (message === advertisementConstants.TEASER_INFO && timer > 0) {
      interval = setInterval(() => {
        advertisementHandler(true, timer - 1, advertisementConstants.TEASER_INFO);
      }, 1000);
    } else if (message === advertisementConstants.TEASER_INFO && timer <= 0) {
      stopAdvertisement();
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    selectedCard,
    advertisementHandler,
    timer,
    message,
    stopAdvertisement,
  ]);

  const actorsList = selectedCard?.actors?.map((actor) => (
    <li key={actor}>{actor}</li>
  ));

  return (
    <div className={style["movie-description-section"]}>
      {!selectedCard ? (
        <Loader />
      ) : (
        <>
          {showAdvertisement ? (
            <div className={style["advertisement-image-container"]}>
              <img
                className={style["movie-advertisement"]}
                src={cachedAd}
                alt={advertisementConstants.ADVERTISEMENT_POSTER_ALT}
              />
            </div>
          ) : (
            <>
              <div className={style["movie-title-like-container"]}>
                <h2 className={style["movie-title"]}>{selectedCard?.movie}</h2>
                <span
                  className={style["like-button-container"]}
                  onClick={() => incrementLikes(selectedCard?.id, selectedCard)}
                >
                  <BsFillHandThumbsUpFill />
                </span>
              </div>
              <h4 className={style["likes-count"]}>
                {likes !== undefined ? likes : selectedCard?.likes}
                {allMoviesPageConstants.LIKES}
              </h4>
              <div className={style["movie-poster-container"]}>
                <img src={selectedCard?.link} alt={selectedCard?.movie} />
              </div>
              <div className={style["movie-description-container"]}>
                <p className={style["about-movie"]}>
                  {selectedCard?.description}
                </p>
                <h4 className={style["actors"]}>
                  {allMoviesPageConstants.ACTORS_TITLE}
                </h4>
                <ul className={style["actors-list"]}>{actorsList}</ul>
              </div>
            </>
          )}
          {showStatus && (
            <div className={style["status-container"]}>
              {message + getFormatedTimeString(timer)}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default withAdvertisement(MovieDescriptionSection);
