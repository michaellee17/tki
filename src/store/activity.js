import axios from 'axios'
export const activity = {
  namespaced: true,
  state: () => ({
    basic_info: null,
    announcement_info: null,
    ticket_info: null,
    venue_info: null,
    matter_content: null,
  }),
  mutations: {
    getData(state, data) {
      state.basic_info = data.basic_info;
      state.announcement_info = data.announcement_info;
      state.ticket_info = data.ticket_info;
      state.venue_info = data.venue_info;
      state.matter_content = data.matter_content;
      console.log('mutation')
    }
  },
  actions: {
     /* 取得活動資訊 */
    getData({ commit }) {
      axios.get(`${process.env.VUE_APP_PATH}/event/get-info?event_id=3`)
      .then(res => { 
        commit('getData', res.data.data);
      });
    }
  },
  getters: {}
}
