const readerBar = require('eleventy-plugin-reader-bar')

module.exports = function (config) {
    pathPrefix: "/padraigobrien.com/"
    config.addPlugin(readerBar)
    config.addPassthroughCopy("./src/css/style.css");
    config.addPassthroughCopy("./src/images");
    return {
        dir: {
            input: './src',
            output: './build',
            includes: '_includes',
            data: '_data',
            images: './images'
        }
    }
}