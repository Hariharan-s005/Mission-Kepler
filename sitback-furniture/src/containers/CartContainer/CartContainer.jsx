import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../CartContainer/CartContainer.module.css';
import Button from '../../components/Button/Button';
import CartCard from '../../components/CartCard/CartCard';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { buttonConstants } from '../../constants/buttonConstants';
import { cartConstants } from '../../constants/cartConstants';
import { navigationConstants } from '../../constants/navigationConstants';
import { currencyConstants } from '../../constants/currencyConstants';
import { convertToRupee } from '../../utils/coversion.utils';

export const CartContainer = ({
  wishlist,
  myCart,
  removeFromWishlist,
  cartTabToggle,
  isWishlistactive,
  isCartActive,
  addToCart,
}) => {
  const navigate = useNavigate();

  const navigateToConfirmOrder = () => {
    navigate(
      `${navigationConstants.backSlash}${navigationConstants.confirmOrder}`
    );
  };
  const wishlistCards = wishlist?.map((card) => (
    <CartCard
      wishlist={card}
      key={card.id}
      removeFromWishlist={removeFromWishlist}
    />
  ));
  const myCartCards = myCart?.map((card) => (
    <CartCard
      wishlist={card}
      key={card.id}
      removeFromWishlist={removeFromWishlist}
      isMyCart={true}
      addToCart={addToCart}
    />
  ));

  let totalPrice = 0;
  if (myCart) {
    totalPrice = myCart.reduce(
      (total, cartItem) => total + parseInt(cartItem.quantity * cartItem.price),
      0
    );
  }
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
            <CartEmpty active={isCartActive}/>
          )
        ) : myCart?.length !== 0 ? (
          <>{myCartCards}</>
        ) : (
          <CartEmpty active={isCartActive}/>
        )}
      </div>
      {isCartActive && myCart?.length !== 0 && (
        <div className={style["place-order-tab"]}>
          <div className={style["amount-container"]}>
            <h3 className={style["amount-text"]}>
              {cartConstants.TOTAL_AMOUNT}
            </h3>
            <h2 className={style["total-price"]}>
              {currencyConstants.rupee} {convertToRupee(totalPrice)}
            </h2>
          </div>
          <Button
            name={buttonConstants.PLACE_ORDER}
            style={style["place-order-button"]}
            onClick={navigateToConfirmOrder}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
