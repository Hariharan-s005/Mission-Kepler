import React from "react";
import style from "./OrderContainer.module.css";
import PropTypes from "prop-types";
import OrderCard from "../../components/OrderCard/OrderCard";
import { orderPageConstants } from "../../constants/constants";

export const OrderContainer = ({ myOrder }) => {
  const productCard = myOrder?.map((card, index) => (
    <OrderCard key={index} product={card} />
  ));
  return (
    <div className={style.orderContainer}>
      <h2>{orderPageConstants.orderConformationTitle}</h2>
      <h3>{orderPageConstants.orderConformationSubTitle}</h3>
      <div className={style.cardWrapper}>{productCard}</div>
    </div>
  );
};
OrderContainer.propTypes = {
  myOrder: PropTypes.array.isRequired,
};

export default OrderContainer;
