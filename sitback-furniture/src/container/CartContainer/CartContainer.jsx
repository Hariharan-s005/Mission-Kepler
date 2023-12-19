import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import style from "../CartContainer/CartContainer.module.css";
import CartCard from "../../components/CartCard/CartCard";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { buttonNames } from "../../constants/constants";


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
  const wishlistCard = wishlist?.map((card, index) => (
    <CartCard
      wishlist={card}
      key={index}
      removeFromWishlist={removeFromWishlist}
    />
  ));
  const myCartCard = myCart?.map((ele, ind) => (
    <CartCard
      wishlist={ele}
      key={ind}
      removeFromWishlist={removeFromWishlist}
      isMyCart={true}
      addToCart={addToCart}
    />
  ));
  return (
    <div className={style.cartContainer}>
      <div className={style.cartWrapper}>
        <header className={style.cartHeader}>
          <p
            onClick={() => cartTabToggle(false, true)}
            className={isCartActive ? style.selectedTab : ""}
          >
            MY CART
          </p>
          <p
            onClick={() => cartTabToggle(true, false)}
            className={isWishlistactive ? style.selectedTab : ""}
          >
            MY WISHLIST
          </p>
        </header>
        <main className={style.cartContentWrapper}>
          {isWishlistactive ? (
            wishlist?.length !== 0 ? (
              <>{wishlistCard}</>
            ) : (
              <>
                <CartEmpty />
              </>
            )
          ) : myCart?.length !== 0 ? (
            <>{myCartCard}</>
          ) : (
            <>
              <CartEmpty />
            </>
          )}
        </main>
        {isCartActive && myCart?.length ? (
          <footer className={style.cartFooter}>
            <div className={style.amountContainer}>
              <p className={style.title}>TOTAL AMOUNT</p>
              <p>{totalPrice}</p>
            </div>
            <Button
              name={buttonNames.PLACE_ORDER}
              style={style.placeOrderButton}
              onClick={navigateToConfirmOrder}
            ></Button>
          </footer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};


export default CartContainer;
