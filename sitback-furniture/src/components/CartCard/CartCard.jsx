import React from "react";
import style from "../CartCard/CartCard.module.css";
import Button from "../Button/Button";
import { convertToRupee } from "../../utils/utils";
import { buttonNames } from "../../constants/constants";

export const CartCard = ({
  wishlist,
  removeFromWishlist,
  isMyCart,
  addToCart,
}) => {
  const removeWishlist = () => {
    removeFromWishlist(wishlist);
  };
  const price = convertToRupee(wishlist.price);
  return (
    <div className={style.cartCardContainer}>
      <div className={style.cartCardWrapper}>
        <div className={style.imgContainer}>
          <img src={wishlist.photo} alt={wishlist.name} />
        </div>
        <div className={style.cartdetailsContainer}>
          <h3>{wishlist.name}</h3>
          <h4>₹ {price}</h4>
        </div>
        {isMyCart ? (
          <div className={style.buttonContainer}>
            <Button
              name={buttonNames.decrementButton}
              style={style.aggregateButton}
              onClick={() => addToCart(wishlist, -1)}
            ></Button>
            <p>{wishlist.quantity}</p>
            <Button
              name={buttonNames.incrementButton}
              style={style.aggregateButton}
              onClick={() => addToCart(wishlist, 1)}
            ></Button>
          </div>
        ) : (
          <Button
            name={buttonNames.ADD_TO_CART}
            onClick={removeWishlist}
            style={style.cartButton}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default CartCard;
