import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import style from "../CartContainer/CartContainer.module.css";
import CartCard from "../../components/CartCard/CartCard";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { buttonNames,cartConstants } from "../../constants/constants";

export const CartContainer = ({
  wishlist,
  myCart,
  removeFromWishlist,
  cartTabToggle,
  isWishlistactive,
  isCartActive,
  addToCart,
  totalPrice,
}) => {
  const navigate = useNavigate();

  const navigateToConfirmOrder = () => {
    navigate(`/confirmOrder`);
  };
  const wishlistCards = wishlist?.map((card, index) => (
    <CartCard
      wishlist={card}
      key={index}
      removeFromWishlist={removeFromWishlist}
    />
  ));
  const myCartCards = myCart?.map((ele, ind) => (
    <CartCard
      wishlist={ele}
      key={ind}
      removeFromWishlist={removeFromWishlist}
      isMyCart={true}
      addToCart={addToCart}
    />
  ));
  return (
    <div className={style["cart-container"]}>
      <header className={style["cart-title"]}>
        <p
          onClick={() => cartTabToggle(false, true)}
          className={isCartActive ? style["active-tab"] : ""}
        >
          {cartConstants.MY_CART}
        </p>
        <p
          onClick={() => cartTabToggle(true, false)}
          className={isWishlistactive ? style["active-tab"] : ""}
        >
          {cartConstants.MY_WISHLIST}
        </p>
      </header>
      <div className={style["cart-content-wrapper"]}>
        {isWishlistactive ? (
          wishlist?.length !== 0 ? (
            <>{wishlistCards}</>
          ) : (
            <>
              <CartEmpty />
            </>
          )
        ) : myCart?.length !== 0 ? (
          <>{myCartCards}</>
        ) : (
          <>
            <CartEmpty />
          </>
        )}
      </div>
      {isCartActive && myCart?.length!==0 ? (
        <div className={style["place-order-tab"]}>
          <div className={style["amount-container"]}>
            <h3 className={style["amount-text"]}>{cartConstants.TOTAL_AMOUNT}</h3>
            <h2 className={style["total-price"]}>{`₹ ${totalPrice}`}</h2>
          </div>
          <Button
            name={buttonNames.PLACE_ORDER}
            style={style["place-order-button"]}
            onClick={navigateToConfirmOrder}
          ></Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartContainer;
