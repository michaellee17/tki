import axios from 'axios';
export const user = {
  namespaced: true,
  state: () => ({
    //loginStatus為false代表未登入，為true代表已登入
    loginStatus: false,
    memberData: null,
    loginData:null,
  }),
  actions: {
    fetchMemberData({ commit },loginToken) {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/get_info`;
      axios.get(apiUrl,{
        headers: {
          'Authorization': `Bearer ${loginToken}`,
        }
      }).then(response => {
        commit('setMemberData', response.data);
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
    },
    updateLoginStatus({ commit }, status) {
      commit('changeLoginStatus', status);
    },
    updateLoginData({ commit }, status) {
      commit('setLoginData', status);
    },
  },
  mutations: {
    setMemberData(state, data) {
      state.memberData = data;
    },
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    },
    setLoginData(state, status) {
      state.loginData = status;
    },
  },
  getters: {
    getLoginStatus(state){
      return state.loginStatus;
    },
    getMemberData(state) {
      return state.memberData;
    },
    getLoginData(state){
      return state.loginData;
    }
  },
};