//原版
const { defineConfig } = require('@vue/cli-service');
const path = require("path");

const PrerenderSPAPlugin = require('prerender-spa-plugin-next');

module.exports = defineConfig(
    {
        publicPath: process.env.VUE_APP_BUILD_PATH,
        // publicPath: process.env.NODE_ENV === 'production'? process.env.VUE_APP_BUILD_PATH : '/',
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
//開發中
// const { defineConfig } = require('@vue/cli-service')
// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

// module.exports = defineConfig({
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {
//       return {
//         plugins: [
//           new PrerenderSPAPlugin({
//             staticDir: path.join(__dirname, 'dist'),
//             routes: ['/'],
//             renderer: new Renderer({
//               inject: {
//                 foo: 'bar'
//               },
//               headless: true, 
//               renderAfterDocumentEvent: 'render-event',
//               navigationParams: {
//                 timeout: 0
//               }
//             })
//           })
//         ],
//       }
//     }
//   },
// })

