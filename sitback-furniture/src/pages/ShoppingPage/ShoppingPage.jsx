import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ShoppingPage.module.css';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import CartContainer from '../../containers/CartContainer/CartContainer';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import Loader from '../../components/Loader/Loader';
import { fetchProducts } from '../../services/apiService.js';
import {
  addtoWishList,
  removeDataFromWishlist,
  addDataToCart,
} from '../../utils/shopping.utils';
import { localStorageVariableConstants } from '../../constants/localStorageVariableConstants';

const ShoppingPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const { categories } = useParams();
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [productfetchFail, setProductsFetchFail] = useState(false);
  
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
    setCart(cartData.cart);
    cartTabToggle(false, true);
    return cartData.cart;
  };

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const data = await fetchProducts(categories);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setProductsFetchFail(true);
      }
    };
    fetchProductsByCategory();
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

  const productCards = products?.map((card) => {
    return (
      <ProductCard
      
        key={card.id}
        product={card}
        manageWishlist={manageWishlist}
        manageCart={addToCart}
      />
    );
  });

  return (
    <>
      {productfetchFail ? (
        <PageNotFound />
      ) : (
        <>
          {isloading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <div className={style.container}>
                <div className={style["product-container"]}>{productCards}</div>
                {(wishlist?.length > 0 || cart?.length > 0) && (
                  <div>
                    <CartContainer
                      wishlist={wishlist}
                      myCart={cart}
                      addToCart={addToCart}
                      removeFromWishlist={removeFromWishlist}
                      cartTabToggle={cartTabToggle}
                      isWishlistactive={wishlistActive}
                      isCartActive={cartActive}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ShoppingPage;
