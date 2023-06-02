export default {
  install: (app) => {
    let convertToSlug = (title, id, type = "") => {
      return (
        type +
        title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "") +
        "-" +
        id
      );
    };

    app.config.globalProperties.$convertToSlug = (title, id) => {
      return convertToSlug(title, id);
    };

    app.config.globalProperties.$buildProductURL = (title, id) => {
      return convertToSlug(title, id, process.env.VUE_APP_PRODUCT_PATH);
    };
    app.config.globalProperties.$buildBlogURL = (title, id) => {
      return convertToSlug(title, id, process.env.VUE_APP_BLOG_PATH);
    };
  },
};
