import React from "react";
import BrokenTV from "../../assets/broken-tv.png";
import style from "./PageNotFound.module.css";
import { pageNotFoundConstants } from "../../constants/pageNotFoundConstants";
const PageNotFound = () => {
  return (
    <div className={style["page-not-found-container"]}>
      <h2 className={style["page-not-found-title"]}>
        {pageNotFoundConstants.title}
      </h2>
      <p className={style["page-not-found-reason"]}>
        {pageNotFoundConstants.description}
      </p>
      <h1 className={style["error-code"]}>{pageNotFoundConstants.errorCode}</h1>
      <div className={style["page-not-found-image-container"]}>
        <img src={BrokenTV} alt={pageNotFoundConstants.imageAlt} />
      </div>
    </div>
  );
};

export default PageNotFound;
