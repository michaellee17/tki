export const application = {
  state: () => ({
    breadcrumb: [],
    contactInfo: {
      street: "211 Ullamcorper St Roseville",
      email: "sale@modeltheme.com",
      phoneNo: "+40 712 345 678",
      socials: [
        { icon: "facebook-f", link: "/" },
        { icon: "twitter", link: "/" },
        { icon: "linkedin", link: "/" },
        { icon: "instagram", link: "/" },
      ],
    },
    settings: {
      websiteName: "iBid",
    },
    locale: "en-US",
    currency: "USD",
    currentActiveModal: "",
  }),
  mutations: {
    setLocation(state, payload) {
      state.breadcrumb = payload;
    },
    toggleModal(state, payload) {
      if(state.currentActiveModal === payload) {
        state.currentActiveModal = ""
      } else {
      state.currentActiveModal = payload;
      }
    },
    forceCloseModal(state) {
      state.currentActiveModal = "";
    }
  },

  actions: {},
  getters: {
    modalIsQuickView: (state) => {
      return state.currentActiveModal.includes('qv');
    },
  },
};
