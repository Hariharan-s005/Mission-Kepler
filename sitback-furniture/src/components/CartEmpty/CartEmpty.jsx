import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { cartEmptyConstants } from "../../constants/constants";
import style from "./CartEmpty.module.css";

export const CartEmpty = () => {
  return (
    <div className={style["empty-container"]}>
      <div className={style["empty-text"]}>{cartEmptyConstants.empty}</div>
      <IoCartOutline className={style.icon} />
    </div>
  );
};

export default CartEmpty;
