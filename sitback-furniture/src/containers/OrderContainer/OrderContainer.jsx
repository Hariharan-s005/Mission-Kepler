import React from 'react';
import PropTypes from 'prop-types';
import style from './OrderContainer.module.css';
import OrderCard from '../../components/OrderCard/OrderCard';
import { orderPageConstants } from '../../constants/orderPageConstants';


export const OrderContainer = ({ myOrder }) => {
  const productCard = myOrder?.map((card) => (
    <OrderCard key={card.id} product={card} />
  ));
  return (
    <div className={style["order-container"]}>
      <h2 className={style["order-confirmation-title"]}>{orderPageConstants.orderConformationTitle}</h2>
      <h3 className={style["order-confirmation-sub-title"]}>{orderPageConstants.orderConformationSubTitle}</h3>
      <div className={style["product-card-container"]}>{productCard}</div>
    </div>
  );
};
OrderContainer.propTypes = {
  myOrder: PropTypes.array.isRequired,
};

export default OrderContainer;
