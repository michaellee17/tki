import "bootstrap/dist/css/bootstrap.min.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { app } from "@storybook/vue3";
import SplitCarousel from "vue-split-carousel";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { modules } from "../src/store/storeModules.js";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";
import PriceFormatter from "../src/plugins/PriceFormatter.js";
import DateFormatter from "../src/plugins/DateFormatter.js";
import FileSource from "../src/plugins/FileSource.js";
import Slugerize from "../src/plugins/Slugerize.js";

import "../src/icons/iconsBrands"
import "../src/icons/iconsRegular"
import "../src/icons/iconsSolid"

import "../src/assets/main.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

const store = new createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",
});


app
  .use(store)
  .use(router)
  .use(PriceFormatter)
  .use(Slugerize)
  .use(FileSource)
  .use(DateFormatter)
  .use(SplitCarousel)
  .component("font-awesome-icon", FontAwesomeIcon);

export const decorators = [
  (story) => ({
    components: {
      story,
    },
    template: "<story />",
  }),
];

const customViewports = {
  landscape: {
    name: "Landscape",
    styles: {
      width: "400px",
      height: "300px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ['Docs'],
      locales: "",
    },
  },
  layout: "centered",
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#44494C" },
      { name: "light", value: "#fff" },
    ],
  },
};
