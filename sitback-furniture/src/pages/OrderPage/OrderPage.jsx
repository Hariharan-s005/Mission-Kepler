import React, { useEffect, useState } from "react";
import { localStorageVariableConstants } from "../../constants/localStorageVariableConstants";
import Header from "../../components/Header/Header.jsx";
import CategoryCardContainer from "../../containers/CategoryCardContainer/CategoryCardContainer.jsx";
import OrderContainer from "../../containers/OrderContainer/OrderContainer.jsx";


const getOrder = () => {
  const myCartData = JSON.parse(
    localStorage.getItem(localStorageVariableConstants.cart)
  );
  return myCartData || [];
};
export const OrderPage = () => {
  const [myOrder, setMyOrder] = useState(() => getOrder());
  const removeProductFromCart = () => {
    localStorage.removeItem(localStorageVariableConstants.cart);
    localStorage.removeItem(localStorageVariableConstants.totalprice);
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
