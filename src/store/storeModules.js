import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { application } from "./applicationState.js";
import { wishlist } from "./wishlist.js";
import { cart } from "./cart.js";
import { user } from "./user.js";
import { appView } from "./appView.js";
import { activity } from "./activity.js";


const dataState = createPersistedState({
  paths: ['user', 'application', 'cart', 'wishlist', 'appView', 'activity']
})

const modules = {
  app: application,
  wishlist,
  cart,
  user,
  appView,
  activity
};

export const store = new createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    dataState,
  ]
});

