import axios from 'axios';
export const user = {
  namespaced: true,
  state: () => ({
    //loginStatus為false代表未登入，為true代表已登入
    loginStatus: false,
    //會員資訊
    memberData: null,
    //登入資訊包含token
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
    cleanMemberData({commit}){
      commit('setMemberData', []);
    },
    bindSuccessData({commit},status){
      commit('setBindingSucessData',status);
    },
    updateBindingData({commit},status){
      commit('changeBindingData', status);
    }
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
    setBindingSucessData(state,status){
      state.memberData.data.platform_status[status] = true;
    },
    changeBindingData(state,status){
      state.memberData.data.platform_status[status] = false;
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
    },
    getMemberBinding(state){
      return state.memberData.data.platform_status
    },
  },
};