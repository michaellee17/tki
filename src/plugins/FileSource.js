export default {
  install: (app) => {
    app.config.globalProperties.$getFileSource = (obj) => {
      if (obj.includes("http")) {
        return obj;
      } else {
        try {
          return require("../assets/" + obj);
        } catch (err) {
          return process.env.VUE_APP_BUILD_PATH + obj;
        }
      }
    };
  },
};
