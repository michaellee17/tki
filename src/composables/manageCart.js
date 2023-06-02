import Vue from "../main";
import { products } from "../data/auctions.json"; // remove import if you are using an api

export function addToCart(id) {
  const {
    $store,
    $toast,
  } = Vue._context.config.globalProperties;

  //try catch is optional, adapt to your own logic
  try {
    // Make request for product
    let getProduct = products.find((product) => product.id === id);

    // add to client-side cart
    $store.dispatch("addProduct", getProduct);
    $toast.success(getProduct.name +" added to cart.");
  } catch {
    $toast.error("An error has occurred.");
    return "";
  }
}
export function removeFromCart(id) {
  const {
    $store,
    $toast,
  } = Vue._context.config.globalProperties;

  //try catch is optional, adapt to your own logic
  try {
    let getProduct = products.find((product) => product.id === id);

    // remove from client-side cart
    $store.dispatch("removeProduct", id);
    $toast.success(getProduct.name +" removed from cart.");
  } catch {
    $toast.error("An error has occurred.");
    return "";
  }
}
