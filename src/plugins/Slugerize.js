export default {
  install: (app) => {
    // let convertToSlug = (title, id, type = "") => {
    //   return (
    //     type +
    //     title
    //       // .toLowerCase()
    //       .replace(/ /g, "-")
    //       .replace(/[^\u4e00-\u9fa5a-zA-Z0-9-]+/g, "")
    //       // .replace(/[^\w-]+/g, "") +
    //    + "-" +
    //     id
    //   );
    // };

    let convertToSlug = (title, id, custom_url = null) => {
      console.log('c', custom_url)
      if (custom_url === null) {
        return (
          title
            .replace(/ /g, "-")
            .replace(/[^\u4e00-\u9fa5a-zA-Z0-9-]+/g, "")
          + "-"
          + id
        );
      } else {
        /* 等 api 改完要刪掉後面 */
          return (
            custom_url
            + "-"
            + id
          );
      }
    };

    app.config.globalProperties.$convertToSlug = (title, id, custom_url) => {
      return convertToSlug(title, id, custom_url);
    };

    app.config.globalProperties.$buildBlogURL = (title, id) => {
      return convertToSlug(title, id, process.env.VUE_APP_BLOG_PATH);
    };
  },
};
