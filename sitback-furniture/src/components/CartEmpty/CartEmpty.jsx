import React from "react";
import { IoCartOutline } from "react-icons/io5";
import style from "./CartEmpty.module.css";

export const CartEmpty = () => {
  return (
    <div className={style.emptyCartcontainer}>
      <div>Empty</div>
      <IoCartOutline className={style.icon} />
    </div>
  );
};

export default CartEmpty;
