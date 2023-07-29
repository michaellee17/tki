import axios from 'axios'
import router from '../router';

export const activity = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    /* 活動資訊 */
    routeActivityId: '',
    basic_info: {},
    announcement_info: {},
    ticket_info: {},
    venue_info: {},
    matter_content: {},
    recommendList: [],
    /* 購票 */
    session_name: '',
    ticket_limit: 2,
    area_name: '',
   /*  status = 1 啟用座位、啟用自行選位
       status = 2 啟用座位、禁用自行選位
       status = 3 不啟用座位 */
    area_status: 0,
    ticket_type_info: [],
    selectedTicketName: '',
    ticket_number: 1,
    /* 訂單 */
    orderData: {},
    /* 購票清單導向 cart */
    l_ticket_start_date: ''
  }),
  mutations: {
    getData(state, data) {
      state.basic_info = data.basic_info;
      state.announcement_info = data.announcement_info;
      state.ticket_info = data.ticket_info;
      state.venue_info = data.venue_info;
      state.matter_content = data.matter_content;
      state.isLoading = false;
      // console.log('mutation')
    },
    getRecommendList(state, data) {
      state.recommendList = data;
    },
    minus (state) {
      state.ticket_number--;
    },
    plus (state) {
      state.ticket_number++;
    },
    setTicketData(state, { stateData, data }) {
      state[stateData] = data;
    },
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
  getters: {
    ticketPrice(state) {
      const selectedTicket = state.ticket_type_info.find(ticket => ticket.ticket_name === state.selectedTicketName);
      return selectedTicket ? selectedTicket.ticket_price : '';
    },
    ticket_id(state) {
      const selectedTicket = state.ticket_type_info.find(ticket => ticket.ticket_name === state.selectedTicketName);
      return selectedTicket ? selectedTicket.ticket_id : '';
    }
  }
}
