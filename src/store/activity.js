import axios from 'axios'
import router from "../router";

export const activity = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    isUpdated: false,
    
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
    /* limit = -1 無限
    limit = 1 限買 1 張/人 */
    ticket_limit: 1,
    /*  status = 1 啟用座位、啟用自行選位
    status = 2 啟用座位、禁用自行選位
    status = 3 不啟用座位 */
    area_name: '',
    area_status: 0,
    ticket_type_info: [],
    selectedTicketName: '',
    ticket_number: 1,

    /* 訂單 */
    orderData: {},

    /* 購票清單導向 cart */
    l_session_name: '',
    l_area_name: '',
    l_ticket_name: '',
    l_ticket_number: 0,
    l_ticket_start_date: ''
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
    cleanData(state) {
      state.basic_info = {};
      state.announcement_info = {};
      state.ticket_info = {};
      state.venue_info = {};
      state.matter_content = {};
      state.orderData = {};
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
    setListTicketData(state) {
      state.session_name = state.l_session_name; 
      state.area_name = state.l_area_name;
      state.selectedTicketName = state.l_ticket_name;
      state.ticket_number = state.l_ticket_number;
      // state.isUpdated = true;
    },
  },
  actions: {
     /* 取得活動資訊 */
    getData({ commit }, eventId) {
      commit('setTicketData', { stateData: 'isUpdated', data: false });
      axios.get(`${process.env.VUE_APP_PATH}/event/get-info?event_id=${eventId}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          commit('getData', res.data.data);
          commit('setTicketData', { stateData: 'isUpdated', data: true });
          commit('setTicketData', { stateData: 'isLoading', data: false });
        } else {
          router.push('/404');
          commit('setTicketData', { stateData: 'isLoading', data: false });
        }
      });
    },
    getDraft({ commit }, identifier) {
      commit('setTicketData', { stateData: 'isUpdated', data: false });
      axios.get(`${process.env.VUE_APP_PATH}/event/get-draft-info?identifier=${identifier}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          console.log(res.data.data)
          commit('getData', res.data.data);
          commit('setTicketData', { stateData: 'isUpdated', data: true });
          commit('setTicketData', { stateData: 'isLoading', data: false });
        } else {
          commit('setTicketData', { stateData: 'isLoading', data: false });
          router.push('/404');
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
          console.error('error');
        }})
      .catch(error => {
        console.error('error occurred:', error);
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
