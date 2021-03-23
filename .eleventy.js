const htmlmin = require('html-minifier')
require('dotenv').config()
const { DateTime } = require("luxon");
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS } = require('@contentful/rich-text-types');

const now = String(Date.now())

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
  }
};

module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget('./_tmp/style.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  })
  
  eleventyConfig.addPassthroughCopy({
    './assets': './assets',
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  //render from rich text editor
  eleventyConfig.addShortcode('documentToHtmlString', content => documentToHtmlString(content, options));

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  return {
    dir: {
        input: "src",
        output: "_site",
        layouts: '_includes/layouts'
    }
};
}
