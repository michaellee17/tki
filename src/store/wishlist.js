import {remove} from "lodash"

export const wishlist = {
  namespaced: true,
  state: () => ({
    productIds: [],
  }),
  mutations: {
    addProduct(state, id) {
      state.productIds.push(id);
    },
    removeProduct(state, payload) {
      remove(state.productIds, function(currentObject) {
        return currentObject === payload;
      })
    }
  },
  actions: {
    addProduct({ commit }, id) {
      commit("addProduct", id);
    },
    removeProduct({ commit, getters }, id) {
      if (getters.productExistsInWishlist(id) !== undefined)
        commit("removeProduct", id);
    },
  },
  getters: {
    productExistsInWishlist: (state) => (id) => {
      return state.productIds.find((pID) => pID === id);
    },
  },
};
