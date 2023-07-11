export const user = {
  namespaced: true,
  state: () => ({
    loginStatus: '未登入',
  }),
  actions: {
    updateLoginStatus({ commit }, status) {
      commit('changeLoginStatus', status);
    },
  },
  mutations: {
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    },
  },
  getters: {
    getLoginStatus(state){
      return state.loginStatus;
    }
  },
};