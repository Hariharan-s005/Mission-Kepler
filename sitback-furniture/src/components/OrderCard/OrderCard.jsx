import React from "react";
import style from "./OrderCard.module.css";
import { convertToRupee } from "../../utils/utils";
import { orderCardConstants } from "../../constants/constants";
export const OrderCard = ({ product }) => {
  const price = convertToRupee(product.price);
  return (
    <div className={style.orderCard}>
      <img src={product.photo} alt={product.name} />
      <div className={style.nameAndPrice}>
        <p>{product.name}</p>
        <p>{`₹ ${price}`}</p>
      </div>
      <h3>
        {orderCardConstants.quantity} : {product.quantity}
      </h3>
      <p className={style.cardDescription}> {product.description}</p>
    </div>
  );
};

export default OrderCard;
