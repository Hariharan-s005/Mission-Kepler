import React from 'react';
import style from './PageNotFound.module.css';
import pageNotFoundImage from '../../assets/page-not-found.png';
import {pageNotFoundConstants} from '../../constants/pageNotFoundConstants';
const PageNotFound = () => {
  return (
    <div className={style["page-not-found-container"]}>
      <h2 className={style["page-not-found-title"]}>Uh-Oh....</h2>
      <p className={style["page-not-found-reason"]}>{pageNotFoundConstants.description}</p>
      <h1 className={style["error-code"]}>{pageNotFoundConstants.errorCode}</h1>
      <div className={style["page-not-found-image-container"]}>
      <img src={pageNotFoundImage} alt={pageNotFoundConstants.imageAlt} />
      </div>
    </div>
  );
};

export default PageNotFound;