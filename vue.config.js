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
        // configureWebpack: {
        //     resolve: {
        //       alias: {
        //         "@": path.resolve(__dirname, "./src")
        //       }
        //     }
        //   }
    }
)