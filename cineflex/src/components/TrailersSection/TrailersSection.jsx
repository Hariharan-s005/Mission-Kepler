import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginContext } from "../../contexts/login-context";
import trailerThumnail from "../../assets/trailer-thumbnail.png";
import { homePageConstants } from "../../constants/homePageConstants";
import { navigationConstants } from "../../constants/navigationConstants";
import style from "./TrailersSection.module.css";
export const TrailersSection = () => {
  const navigate = useNavigate();
  const { loginStatus, setLoginStatus } = useContext(loginContext);

  const watchNowButtonHandler = () => {
    if (loginStatus.isLoggedIn) {
      navigate(
        `${navigationConstants.backSlash}${navigationConstants.nowShowing}`
      );
    } else {
      navigate(`${navigationConstants.backSlash}${navigationConstants.login}`);
    }
  };
  return (
    <div className={style["trailers-section"]}>
      <h2 className={style["section-title"]}>
        {homePageConstants.trailersSectiontitle}
      </h2>
      {!loginStatus.isLoggedIn && (
        <h4 className={style["not-signed-in-text"]}>
          {homePageConstants.notSignedInMessage}
          <span>
            <NavLink
              to={`${navigationConstants.backSlash}${navigationConstants.login}`}
            >
              {homePageConstants.signInText}
            </NavLink>
          </span>
        </h4>
      )}
      <div className={style["trailer-container"]}>
        <div className={style["image-container"]}>
          <img src={trailerThumnail} alt={homePageConstants.trailerTitle} />
        </div>
        <div className={style["trailer-details-container"]}>
          <h2 className={style["trailer-title"]}>
            {homePageConstants.trailerTitle}
          </h2>
          <p className={style["trailer-description"]}>
            {homePageConstants.description}
          </p>
          <button className={style["watch-now-button"]}onClick={watchNowButtonHandler}>{homePageConstants.WATCH_NOW}</button>
        </div>
      </div>
    </div>
  );
};

export default TrailersSection;
