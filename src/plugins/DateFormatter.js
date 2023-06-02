export default {
  install: (app) => {
    app.config.globalProperties.$formatDate = (date) => {
      const event = new Date(date);
      const options = {
        // weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return event.toLocaleDateString(app.config.globalProperties.$store.state.app.locale, options);
    };
  },
};
