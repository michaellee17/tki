// import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import VueZoomer from 'vue-zoomer'


import SplitCarousel from "vue-split-carousel";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueToast from 'vue-toast-notification';
import { modules, dataState } from "./store/storeModules.js";

import PriceFormatter from "./plugins/PriceFormatter.js"
import DateFormatter from "./plugins/DateFormatter.js"
import FileSource from "./plugins/FileSource.js"
import Slugerize from "./plugins/Slugerize.js"
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./icons/iconsSolid.js";
import "./icons/iconsRegular.js";
import "./icons/iconsBrands.js";


// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';


const Vue = createApp(App);

const store = new createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",
  plugins: [dataState]
});

/* 預設跳頁時滾動到頂部，以下條件除外， */
router.beforeEach((to, from) => {
  switch (to.name) {
    case 'BuyTicket':
    case 'BuyTicketSession':
    case 'BuyTicketType':
    case 'BuyTicketSeat':
    case 'Location':
    case 'Notes':
      break;
    default:
      /* 從 activity/detail 跳頁到 News 不會滾動到頂部 */
      if (to.name === 'News' && from.path.includes('activity/detail')) {
        break;
      }
      window.scrollTo(0, 0)
  }
  store.commit("forceCloseModal")
})

Vue.use(VueZoomer)
  .use(router)
  .use(store)
  .use(PriceFormatter)
  .use(FileSource)
  .use(VueToast)
  .use(Slugerize)
  .use(DateFormatter)
  .use(SplitCarousel)
  .use(VueAxios, axios)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");


  export default Vue