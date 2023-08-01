import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueZoomer from 'vue-zoomer';
import vue3GoogleLogin from 'vue3-google-login';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAppleLogin from 'vue-apple-login';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import SplitCarousel from "vue-split-carousel";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueToast from 'vue-toast-notification';
import { store } from "./store/storeModules.js";

import PriceFormatter from "./plugins/PriceFormatter.js"
import DateFormatter from "./plugins/DateFormatter.js"
import FileSource from "./plugins/FileSource.js"
import Slugerize from "./plugins/Slugerize.js"
import { timeFormatter } from './methods/timeFormatter.js'
import { currency } from './methods/currencyFilter.js'


import "./icons/iconsSolid.js";
import "./icons/iconsRegular.js";
import "./icons/iconsBrands.js";


// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);

app.config.globalProperties.$timeFormatter = timeFormatter;
app.config.globalProperties.$currency = currency;

const gAuthOptions = {
  clientId: '578959991705-kbott67stia8chh8mijjfs8e1qa77hbo.apps.googleusercontent.com',
};
app.use(vue3GoogleLogin,gAuthOptions)


/* 預設跳頁時滾動到頂部，以下條件除外， */
router.beforeEach((to, from) => {
  switch (to.name) {
    case 'News':
    case 'BuyTicket':
    case 'BuyTicketType':
    case 'BuyTicketSeat':
    case 'BuyTicketCart':
    case 'BuyTicketCheckout':
    case 'Location':
    case 'Notes':
      break;  
    default:
      /* 從 activity/detail 跳頁到 BuyTicketSession 不會滾動到頂部 */
      if (to.name === 'BuyTicketSession' && from.path.includes('activity/detail')) {
        break;
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
      break;
  }
  store.commit("forceCloseModal")
})
app.use(VueAppleLogin, {
  clientId: 'demo2.gcreate.com.tw',
  scope: 'name email',
  redirectURI: 'https://example.com/redirect',
  state: 'test',
  usePopup: true,
});
app.use(VueZoomer)
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
  .component("Loading", Loading)
  .mount("#app");


  export default app