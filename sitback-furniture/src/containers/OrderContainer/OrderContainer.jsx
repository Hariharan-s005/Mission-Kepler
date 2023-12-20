import React from "react";
import style from "./OrderContainer.module.css";
import PropTypes from "prop-types";
import { orderPageConstants } from "../../constants/orderPageConstants";
import OrderCard from "../../components/OrderCard/OrderCard";

export const OrderContainer = ({ myOrder }) => {
  const productCard = myOrder?.map((card, index) => (
    <OrderCard key={index} product={card} />
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
