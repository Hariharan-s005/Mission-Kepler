import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ShoppingPage.module.css";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartContainer from "../../containers/CartContainer/CartContainer";
import Loader from "../../components/Loader/Loader";
import { fetchProduct } from "../../services/apiService.jsx";
import { addtoWishList,removeDataFromWishlist,addDataToCart} from "../../utils/utils.shopping";
import { convertToRupee } from "../../utils/utils.coversion";
import { localStorageVariableConstants } from "../../constants/localStorageVariableConstants";

const ShoppingPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() =>
    JSON.parse(localStorage.getItem(localStorageVariableConstants.totalprice))
  );
  const { categories } = useParams();
  const [items, setItems] = useState([]);
  const [isloading,setIsLoading]=useState(true);
  const cartTabToggle = (isWishlist, isCart) => {
    setWishlistActive(isWishlist);
    setCartActive(isCart);
  };

  const setStatus = () => {
    const Cart = JSON.parse(
      localStorage.getItem(localStorageVariableConstants.cart)
    );
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
      setIsLoading(false);
    });
  }, [categories]);

  useEffect(() => {
    const tempCartData = localStorage.getItem(
      localStorageVariableConstants.cart
    );
    const myCartData = JSON.parse(tempCartData);
    const tempWishListData = localStorage.getItem(
      localStorageVariableConstants.wishlist
    );
    const wishListData = JSON.parse(tempWishListData);
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
      {isloading?<Loader/>:
      <div className={style.container}>
        <div className={style["product-container"]}>{productCards}</div>

        {(wishlist && wishlist?.length !== 0) ||
          (cart && cart?.length !== 0) ? (
          <div>
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
      </div>}
    </>
  );
};

export default ShoppingPage;
