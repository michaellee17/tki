export const user = {
  state: () => ({
    loginStatus: "登入",
    location: "Romania",
    //currency: "USD",
  }),
  mutations: {
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    }
  },
  actions: {},
  getters: {},
};
