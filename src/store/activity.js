import axios from 'axios'
import router from '../router';

export const activity = {
  namespaced: true,
  state: () => ({
    basic_info: {},
    announcement_info: {},
    ticket_info: {},
    venue_info: {},
    matter_content: {},
    recommendList: [],
    /* 購票 */
    session_name: '',
    area_name: '',
    area_status: 0,
    ticket_type_info: []

  }),
  mutations: {
    getData(state, data) {
      state.basic_info = data.basic_info;
      state.announcement_info = data.announcement_info;
      state.ticket_info = data.ticket_info;
      state.venue_info = data.venue_info;
      state.matter_content = data.matter_content;
      // console.log('mutation')
    },
    getRecommendList(state, data) {
      state.recommendList = data;
    },
    setTicketData(state, { stateData, data }) {
      state[stateData] = data;
    }
  },
  actions: {
     /* 取得活動資訊 */
    getData({ commit }, eventId) {
      axios.get(`${process.env.VUE_APP_PATH}/event/get-info?event_id=${eventId}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          commit('getData', res.data.data);
        } else {
          return false
        }
      });
    },
    /* 為您推薦 */
    getRecommendList({ commit }) {
      // console.log('action')
      axios.get(`${process.env.VUE_APP_PATH}/event/get-recommend-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          commit('getRecommendList', res.data.data);
          // console.log('action', res.data.data)
        } else {
          // router.push('/404')
        }
      });
    }
  },
  getters: {}
}
