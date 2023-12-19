import React from "react";
import Button from "../Button/Button";
import style from "./ProductCard.module.css";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { convertToRupee, convertGuaranteeCaption } from "../../utils/utils";
import { buttonNames } from "../../constants/constants";

const ItemsCard = ({ items, manageWishlist, manageCart }) => {
  const addToWishList = () => {
    manageWishlist(items);
  };
  const addToCart = () => {
    manageCart(items, 1);
  };

  const guarantee = convertGuaranteeCaption(items.guarantee);
  const price = convertToRupee(items?.price);

  return (
    <div className={style["product-card"]}>
      <img src={items?.photo} alt={items?.name} />
      <div className={style["product-details-container"]}>
        <h3>{items?.name}</h3>
        <h3>{`₹ ${price}`}</h3>
      </div>
      <p className={style["product-description"]}>{items?.description}</p>
      <div className={style["guarantee-text-container"]}>
        <IoShieldCheckmarkSharp />
        <h4> {guarantee}</h4>
      </div>
      <div className={style["button-container"]}>
        <Button
          name={buttonNames.ADD_TO_WISHLIST}
          style={style["add-to-wishlist-button"]}
          onClick={addToWishList}
        ></Button>
        <Button
          name={buttonNames.ADD_TO_CART}
          style={style["add-to-cart-button"]}
          onClick={addToCart}
        ></Button>
      </div>
    </div>
  );
};

export default ItemsCard;
