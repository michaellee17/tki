export const user = {
  state: () => ({
    loginStatus: "登入",
    location: "Romania",
  }),
  mutations: {
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    }
  },
  actions: {},
  getters: {},
};
