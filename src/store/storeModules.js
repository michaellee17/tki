import { application } from "./applicationState.js";
import { wishlist } from "./wishlist.js";
import { cart } from "./cart.js";
import { user } from "./user.js";
import { appView } from "./appView.js";
import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ['user', 'application', 'cart','wishlist', 'appView']
})

const modules = {
  app: application,
  wishlist,
  cart,
  user,
  appView
};

export const store = new createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    dataState,
  ]
});

