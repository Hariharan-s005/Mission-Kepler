import React from 'react';
import style from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={style["loader-container"]}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loader;