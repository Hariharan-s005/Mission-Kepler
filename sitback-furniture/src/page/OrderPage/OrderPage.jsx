import React, { useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import { useState } from "react";
import CategoryCardContainer from "../../container/CategoryCardContainer/CategoryCardContainer.jsx";
import OrderContainer from "../../container/OrderContainer/OrderContainer";
import { localStorageVariable } from "../../constants/constants.jsx";

const getOrder = () => {
  const myCartData = JSON.parse(
    localStorage.getItem(localStorageVariable.cart)
  );
  return myCartData || [];
};
export const OrderPage = () => {
  const [myOrder, setMyOrder] = useState(() => getOrder());
  const removeProductFromCart = () => {
    localStorage.removeItem(localStorageVariable.cart);
    localStorage.removeItem(localStorageVariable.totalprice);
  };

  useEffect(() => {
    removeProductFromCart();
  }, []);

  return (
    <>
      <Header />
      <OrderContainer myOrder={myOrder} />
      <CategoryCardContainer />
    </>
  );
};
export default OrderPage;
