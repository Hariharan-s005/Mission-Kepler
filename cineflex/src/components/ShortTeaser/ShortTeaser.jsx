import React, { useEffect, useRef, useMemo } from "react";
import withAdvertisement from "../../HOC/withAdvertisement";
import {
  getRandomTeaserAdvertisement,
  getFormatedTimeString,
} from "../../utils/advertisement-utils";
import { FaPlay } from "react-icons/fa";
import videoPoster from "../../assets/advertisements/video-poster.png";
import { advertisementConstants } from "../../constants/advertisementConstants";
import style from "./ShortTeaser.module.css";

const ShortTeaser = ({
  timer,
  message,
  showAdvertisement,
  advertisementHandler,
  showStatus,
  stopAdvertisement,
  title,
  videoURL,
}) => {
  const videoRef = useRef(null);
  const iconRef = useRef();
  const cachedAd = useMemo(() => getRandomTeaserAdvertisement(), []);

  const playHandler = () => {
    if (!showAdvertisement) {
      iconRef.current.style.display = "none";
      videoRef.current.play();
    }
    if (videoRef.current.currentTime < 5) {
      advertisementHandler(
        false,
        5 - Math.floor(videoRef.current.currentTime),
        advertisementConstants.ADVERTISEMENT_INFO
      );
    }
  };

  const pauseHandler = () => {
    if (!showAdvertisement) {
      iconRef.current.style.display = "block";
    }
  };

  const togglePlayPauseHandler = () => {
    if (!showAdvertisement && videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    let interval;

    const handleAdCountdown = () => {
      advertisementHandler(true, timer - 1, advertisementConstants.TEASER_INFO);
    };

    if (message === advertisementConstants.ADVERTISEMENT_INFO && timer >= 0) {
      interval = setInterval(() => {
        advertisementHandler(
          false,
          5 - Math.floor(videoRef.current.currentTime),
          advertisementConstants.ADVERTISEMENT_INFO
        );
      }, 1000);
    } else if (message === advertisementConstants.TEASER_INFO && timer > 0) {
      interval = setInterval(handleAdCountdown, 1000);
    } else if (message === advertisementConstants.TEASER_INFO && timer <= 0) {
      videoRef.current.play();
      stopAdvertisement();
    } else if (
      message === advertisementConstants.ADVERTISEMENT_INFO &&
      timer < 0
    ) {
      iconRef.current.style.display = "none";
      videoRef.current.pause();
      advertisementHandler(true, 2, advertisementConstants.TEASER_INFO);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, message, advertisementHandler, stopAdvertisement, videoRef]);
  return (
    <div className={style["teaser-card"]}>
      <div className={style["teaser-video-container"]}>
        {showAdvertisement && (
          <img
            className={style["advertisement-image"]}
            src={cachedAd}
            alt={title}
          />
        )}
        <video
          ref={videoRef}
          className={style["short-teaser"]}
          poster={videoPoster}
          onClick={togglePlayPauseHandler}
          onPlay={playHandler}
          onPause={pauseHandler}
        >
          <source src={videoURL} type="video/mp4" />
        </video>
        <div
          className={style["play-icon-container"]}
          ref={iconRef}
          onClick={playHandler}
        >
          <div className={style["play-icon"]}>
            <FaPlay />
          </div>
        </div>
      </div>
      <h3 className={style["teaser-title"]}>{title}</h3>
      {showStatus && (
        <h4 className={style["teaser-status"]}>
          {message + getFormatedTimeString(timer)}
        </h4>
      )}
    </div>
  );
};

export default withAdvertisement(ShortTeaser);
