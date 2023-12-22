import React from "react";
import style from "./CartEmpty.module.css";
import { IoCartOutline } from "react-icons/io5";
import { TbShoppingCartHeart } from "react-icons/tb";
import { cartEmptyConstants } from "../../constants/cartEmptyConstants";

export const CartEmpty = ({active}) => {
  return (

    <div className={style["empty-container"]}>
      {active ? (
        <>
          <div className={style["empty-text"]}>
            {cartEmptyConstants.cartEmpty}
          </div>
          <IoCartOutline className={style.icon} />
        </>
      ) : (
        <>
          <div className={style["empty-text"]}>
            {cartEmptyConstants.wishListEmpty}
          </div>
          <TbShoppingCartHeart className={style.icon} />
        </>
      )}
    </div>
  );
};

export default CartEmpty;
