export const user = {
  namespaced: true,
  state: () => ({
    loginStatus: '未登入',
  }),
  mutations: {
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    },
  },
  actions: {},
  getters: {},
};