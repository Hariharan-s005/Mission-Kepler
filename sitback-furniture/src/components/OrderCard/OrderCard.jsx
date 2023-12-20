import React from "react";
import style from './OrderCard.module.css';
import { convertToRupee } from '../../utils/utils';
import { orderCardConstants } from '../../constants/constants';
import missingImage from '../../assets/default-image.jpeg';
export const OrderCard = ({ product }) => {
  const price = convertToRupee(product.price);
  const missingImageHandler = (e) => {
    e.target.src = missingImage;
}
  return (
    <div className={style["order-card"]}>
      <img src={product.photo} alt={product.name} onError={missingImageHandler}/>
      <div className={style["order-name-price"]}>
        <p>{product.name}</p>
        <p>{`₹ ${price}`}</p>
      </div>
      <h3 className={style.quantity}>
        {orderCardConstants.quantity} : {product.quantity}
      </h3>
      <p className={style["order-description"]}> {product.description}</p>
    </div>
  );
};

export default OrderCard;
