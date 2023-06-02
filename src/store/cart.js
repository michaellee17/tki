import { remove } from "lodash";

export const cart = {
  state: () => ({
    items: [],
    fees: [{ price: 100, type: "transport" }],
  }),
  mutations: {
    addProduct(state, item) {
      state.items.push(item);
    },
    updateQty(state, payload) {
      state.items.find((item) => item.id === payload.id).qty += payload.qty;
    },
    removeProduct(state, itemID) {
      remove(state.items, (item) => {
        return item.id === itemID;
      });
    },
  },
  actions: {
    addProduct({ commit, getters }, item, priceOverride = -1) {
      if (getters.productExistsInCart(item.id) !== undefined) {
        commit("updateQty", { id: item.id, qty: 1 });
        return;
      }

      item.price = priceOverride === -1 ? item.directBuyPrice : priceOverride;
      item.qty = 1;

      commit("addProduct", item);
    },
    removeProduct({ commit, getters }, id) {
      if (getters.productExistsInCart(id) !== undefined)
        commit("removeProduct", id);
    },
  },
  getters: {
    productExistsInCart: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
    getSubtotal(state) {
      if (state.items.length === 1)
        return state.items[0].price * state.items[0].qty;

      return state.items.reduce((a, b) => a + b.price * b.qty, 0);
    },
    getSubtotalFees(state) {
      if (state.fees.length === 1) return state.fees[0].price;

      return state.fees.reduce((a, b) => a + b.price, 0);
    },
    getTotal(state, getters) {
      return getters.getSubtotal + getters.getSubtotalFees;
    },
    getFeeByType: (state) => (type) => {
      return state.fees.find((fee) => fee.type === type).price;
    },
    getTotalItems(state) {
      if (state.items.length === 1) return state.items[0].qty;
      return state.items.reduce((a, b) => a + b.qty, 0);
    },
  },
};
