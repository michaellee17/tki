export const appView = {
  state: () => ({
    view: false
  }),
  mutations: {
    changeAppView(state, status) {
      state.view = status;
    }
  },
  actions: {},
  getters: {},
};
