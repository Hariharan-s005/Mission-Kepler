import React from 'react';
import style from './OrderCard.module.css';
import { convertToRupee } from '../../utils/coversion.utils';
import { orderCardConstants } from '../../constants/orderCardConstants';
import {currencyConstants} from '../../constants/currencyConstants';
import missingImage from '../../assets/default-image.jpeg';

export const OrderCard = ({ product }) => {
  const totalPrice = convertToRupee(product.price*product.quantity);
  const missingImageHandler = (event) => {
    event.target.src = missingImage;
}
  return (
    <div className={style["order-card"]}>
      <img src={product.photo} alt={product.name} onError={missingImageHandler}/>
      <div className={style["order-name-price"]}>
        <p>{product.name}</p>
        <p>{currencyConstants.rupee} {totalPrice}</p>
      </div>
      <h3 className={style.quantity}>
        {orderCardConstants.quantity} : {product.quantity}
      </h3>
      <p className={style["order-description"]}> {product.description}</p>
    </div>
  );
};

export default OrderCard;
