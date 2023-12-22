import React from "react";
import style from "./ProductCard.module.css";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Button from "../Button/Button";
import {
  convertToRupee,
  convertGuaranteeCaption,
} from "../../utils/coversion.utils";
import { buttonConstants } from "../../constants/buttonConstants";
import { currencyConstants } from "../../constants/currencyConstants";
import missingImage from "../../assets/default-image.jpeg";

const ProductCard = ({ product, manageWishlist, manageCart }) => {
  const missingImageHandler = (event) => {
    event.target.src = missingImage;
  };
  const addToWishList = () => {
    manageWishlist(product);
  };
  const addToCart = () => {
    manageCart(product, 1);
  };

  const guarantee = convertGuaranteeCaption(product.guarantee);
  const price = convertToRupee(product.price);

  return (
    <div className={style["product-card"]}>
      <img
        src={product?.photo}
        alt={product?.name}
        onError={missingImageHandler}
      />
      <div className={style["product-details-container"]}>
        <h3 className={style["product-name"]}>{product?.name}</h3>
        <h3 className={style["product-price"]}><span>{currencyConstants.rupee}</span> {price}</h3>
      </div>
      <p className={style["product-description"]}>{product?.description}</p>
      <div className={style["guarantee-text-container"]}>
        <IoShieldCheckmarkSharp />
        <h4> {guarantee}</h4>
      </div>
      <div className={style["button-container"]}>
        <Button
          name={buttonConstants.ADD_TO_WISHLIST}
          style={style["add-to-wishlist-button"]}
          onClick={addToWishList}
        ></Button>
        <Button
          name={buttonConstants.ADD_TO_CART}
          style={style["add-to-cart-button"]}
          onClick={addToCart}
        ></Button>
      </div>
    </div>
  );
};

export default ProductCard;
