//原版
const { defineConfig } = require('@vue/cli-service');
const path = require("path");

const PrerenderSPAPlugin = require('prerender-spa-plugin-next');

module.exports = defineConfig(
    {
        publicPath: process.env.VUE_APP_BUILD_PATH,
        transpileDependencies: true,
        lintOnSave: false,
        configureWebpack: {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/about']
                })
            ]
        }
    }
)
// 開發中
// const { defineConfig } = require('@vue/cli-service')
// const path = require('path');
// const PrerenderSPAPlugin = require("prerender-spa-plugin-next");
// const renderer = require("@prerenderer/renderer-puppeteer");
// module.exports = defineConfig({
//   publicPath: "/",
//   configureWebpack(config) {
//     if (process.env.NODE_ENV === "production") {
//       const prerenderCfg = new PrerenderSPAPlugin({
//         routes: ["/"],
//         renderer,
//         postProcess(context) {
//           context.outputPath = path.join(
//             "prerender",
//             (context.route.replace("/", "") || "index") + ".html"
//           );
//           return context;
//         },
//         renderOptions: {
//           inject: {
//             foo: "bar",
//           },
//           headless: true,
//           renderAfterDocumentEvent: "prerender",
//         },
//       });
//       config.plugins.push(prerenderCfg);
//     }
//   },
// });
