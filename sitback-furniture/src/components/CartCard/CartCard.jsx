import React from "react";
import style from "../CartCard/CartCard.module.css";
import Button from "../Button/Button";
import { convertToRupee } from "../../utils/coversion.utils";
import { buttonConstants } from "../../constants/buttonConstants";
import { currencyConstants } from "../../constants/currencyConstants";
import missingImage from "../../assets/default-image.jpeg";

export const CartCard = ({
  wishlist,
  removeFromWishlist,
  isMyCart,
  addToCart,
}) => {
  const missingImageHandler = (event) => {
    event.target.src = missingImage;
  };
  const removeWishlist = () => {
    removeFromWishlist(wishlist);
  };
  const price = convertToRupee(wishlist.price);
  return (
    <div className={style["cart-cards-container"]}>
      <div className={style["cart-card"]}>
        <div className={style["cart-image-container"]}>
          <img
            src={wishlist.photo}
            alt={wishlist.name}
            onError={missingImageHandler}
          />
        </div>
        <div className={style["cart-details"]}>
          <h3>{wishlist.name}</h3>
          <h4>
            {currencyConstants.rupee} {price}
          </h4>
        </div>
        {isMyCart ? (
          <div className={style["button-container"]}>
            <Button
              name={buttonConstants.decrementButton}
              style={style["control-button"]}
              onClick={() => addToCart(wishlist, -1)}
            ></Button>
            <p>{wishlist.quantity}</p>
            <Button
              name={buttonConstants.incrementButton}
              style={style["control-button"]}
              onClick={() => addToCart(wishlist, 1)}
            ></Button>
          </div>
        ) : (
          <Button
            name={buttonConstants.ADD_TO_CART}
            onClick={removeWishlist}
            style={style["add-to-cart-button"]}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default CartCard;
