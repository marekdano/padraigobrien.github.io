const readerBar = require('eleventy-plugin-reader-bar')
const htmlmin = require("html-minifier")
const markdownIt = require('markdown-it')
const markdownItClass = require('@toycode/markdown-it-class')


module.exports = function (config) {
    pathPrefix: "/padraigobrien.com/"
    config.addPlugin(readerBar)
    config.addPassthroughCopy("./src/css/style.css");
    config.addPassthroughCopy("./src/images");
    config.addPassthroughCopy("./src/CNAME");


    const mapping = {
        h1: ['text-4xl', 'text-black-400', 'font-bold'],
        a: ['inline-block', 'border', 'border-blue-500', 'rounded', 'py-2', 'px-4', 'bg-blue-500', 'hover:bg-blue-700', 'text-white'],
        li: ['list-disc'],
      };
    
      const md = markdownIt({ linkify: true, html: true });
      md.use(markdownItClass, mapping);
      config.setLibrary('md', md);

      config.addTransform("htmlmin", function (content, outputPath) {
        if (
          process.env.ELEVENTY_PRODUCTION &&
          outputPath &&
          outputPath.endsWith(".html")
        ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
          });
          return minified
        }
    
        return content
      });

      
    return {
        dir: {
            input: './src',
            output: './_site',
            includes: '_includes',
            data: '_data',
            images: './images'
        }
    }
}