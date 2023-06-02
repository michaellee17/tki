import Vue from "../main";
import { products } from "../data/auctions.json"; // remove import if you are using an api

export function addToWishlist(id) {
  const {
    $store,
    $toast,
  } = Vue._context.config.globalProperties;

  //try catch is optional, adapt to your own logic
  try {
    // Make request for product
    let getProduct = products.find((product) => product.id === id);
    // add to client-side cart
    $store.dispatch("wishlist/addProduct", getProduct);
    $toast.success(getProduct.name +" added to wishlist.");
  } catch {
    $toast.error("An error has occurred.");
    return "";
  }
}

export function removeFromWishlist(id) {
  const {
    $store,
    $toast,
  } = Vue._context.config.globalProperties;

  //try catch is optional, adapt to your own logic
  try {
    // Make request for product
    let getProduct = products.find((product) => product.id === id);
    // add to client-side cart
    $store.dispatch("wishlist/removeProduct", getProduct);
    $toast.success(getProduct.name +" removed from wishlist.");
  } catch {
    $toast.error("An error has occurred.");
    return "";
  }
}
