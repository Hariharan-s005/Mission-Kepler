import {localStorageVariableConstants} from '../constants/localStorageVariableConstants';

export const addtoWishList = (product) => {
  const wishlistItems = JSON.parse(localStorage.getItem(`${localStorageVariableConstants.wishlist}`));
  let tempList = [];
  if (wishlistItems == null) {
    tempList = [product];
  } else {
    tempList = wishlistItems.filter((item) => item.id !== product.id);
    tempList = [product, ...tempList];
  }
  localStorage.setItem(`${localStorageVariableConstants.wishlist}`, JSON.stringify(tempList));
  return tempList;
};

export const removeDataFromWishlist = (product) => {
  const wishlist = JSON.parse(localStorage.getItem(`${localStorageVariableConstants.wishlist}`));
  let tempList = wishlist.filter((item) => item.id !== product.id);
  localStorage.setItem(`${localStorageVariableConstants.wishlist}`, JSON.stringify(tempList));
  return tempList;
};

export const addDataToCart = (product, quantity) => {
  let cart = JSON.parse(localStorage.getItem(`${localStorageVariableConstants.cart}`));
  if (cart == null) {
    let cartProduct = { ...product };
    cartProduct.quantity = 1;
    cart = [cartProduct];
  } else {
    let cartProductIndex = cart.findIndex((item) => item.id === product.id);
    if (cartProductIndex === -1) {
      let cartProduct = { ...product };
      cartProduct.quantity = 1;
      cart.push(cartProduct);
    } else {
      cart[cartProductIndex].quantity += quantity;
      if (cart[cartProductIndex].quantity === 0) {
        cart.splice(cartProductIndex, 1);
      }
    }
  }
  localStorage.setItem(`${localStorageVariableConstants.cart}`, JSON.stringify(cart));
  return { cart };
};


