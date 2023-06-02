import { application } from "./applicationState.js";
import { wishlist } from "./wishlist.js";
import { cart } from "./cart.js";
import { user } from "./user.js";

import createPersistedState from "vuex-persistedstate";

export const dataState = createPersistedState({
  paths: ['user', 'application', 'cart','wishlist']
})

export const modules = {
  app: application,
  wishlist,
  cart,
  user,
};
