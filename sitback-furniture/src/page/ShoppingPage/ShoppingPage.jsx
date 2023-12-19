import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "./ShoppingPage.module.css";
import Header from "../../components/Header/Header.jsx";
import CartContainer from "../../container/CartContainer/CartContainer.jsx";
import { fetchProduct } from "../../service/ApiService.jsx";
import {
  addtoWishList,
  removeDataFromWishlist,
  addDataToCart,
} from "../../utils/utils.jsx";
import { convertToRupee } from "../../utils/utils.jsx";
import { localStorageVariable } from "../../constants/constants.jsx";

const ShoppingPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() =>
    JSON.parse(localStorage.getItem(localStorageVariable.totalprice))
  );
  const { categories } = useParams();
  const [items, setItems] = useState([]);

  const cartTabToggle = (isWishlist, isCart) => {
    setWishlistActive(isWishlist);
    setCartActive(isCart);
  };

  const setStatus = () => {
    const Cart = JSON.parse(localStorage.getItem(localStorageVariable.cart));
    Cart && Cart.length !== 0 ? setCartActive(true) : setWishlistActive(true);
  };

  const manageWishlist = (product) => {
    let tempList = addtoWishList(product);
    setWishlist(tempList);
    cartTabToggle(true, false);
    return tempList;
  };

  const removeFromWishlist = (product) => {
    let tempList = removeDataFromWishlist(product);
    setWishlist(tempList);
    addToCart(product, 1);
    return tempList;
  };
  const addToCart = (product, quantity) => {
    const cartData = addDataToCart(product, quantity);
    setTotalPrice(cartData.currentTotalprice);
    setCart(cartData.cart);
    cartTabToggle(false, true);
    return cartData.cart;
  };

  useEffect(() => {
    fetchProduct(categories).then((data) => {
      setItems(data);
    });
  }, [categories]);

  useEffect(() => {
    const tempCartData = localStorage.getItem(localStorageVariable.cart);
    const myCartData = JSON.parse(tempCartData);
    const tempWishLisData = localStorage.getItem(localStorageVariable.wishlist);
    const wishListData = JSON.parse(tempWishLisData);
    setCart(myCartData);
    setWishlist(wishListData);
    setStatus();
  }, []);
  const productCards = items?.map((card, index) => {
    return (
      <ProductCard
        key={index}
        items={card}
        manageWishlist={manageWishlist}
        manageCart={addToCart}
      />
    );
  });
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style["product-container"]}>{productCards}</div>

        {(wishlist && wishlist?.length !== 0) ||
        (cart && cart?.length !== 0) ? (
          <div className={style.cartContainer}>
            <CartContainer
              wishlist={wishlist}
              myCart={cart}
              addToCart={addToCart}
              removeFromWishlist={removeFromWishlist}
              cartTabToggle={cartTabToggle}
              isWishlistactive={wishlistActive}
              isCartActive={cartActive}
              totalPrice={convertToRupee(totalPrice)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ShoppingPage;
