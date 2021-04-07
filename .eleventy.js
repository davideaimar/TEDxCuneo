const htmlmin = require('html-minifier')
require('dotenv').config()
const { DateTime } = require("luxon");
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS, INLINES } = require('@contentful/rich-text-types');

const now = String(Date.now())

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
    [INLINES.HYPERLINK]: (node, next) => {
      return `<a href="${node.data.uri}"${node.data.uri.startsWith('https://www.tedxcuneo.com') || node.data.uri.startsWith('/') ? '' : ' target="_blank"'}>${next(node.content)}</a>`;
    }
  }
};

const normalizeSlug = function(slug){
  if(!slug.startsWith("/")){
    slug = "/" + slug;
  }
  if(!slug.endsWith("/")){
    slug = slug + "/";
  }
  return slug;
}

module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addWatchTarget('./src/settings/config.yml')

  eleventyConfig.addPassthroughCopy({
    './_tmp/style.css': './style.css',
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
    "./src/settings": '/settings',
    "./src/_redirects": '/_redirects'
  })
  
  eleventyConfig.addPassthroughCopy({
    './assets': './assets',
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  //render from rich text editor
  eleventyConfig.addShortcode('documentToHtmlString', content => documentToHtmlString(content, options));
  
  //resize image for og tags {{ page.seo.url | toOgImage }}
  eleventyConfig.addFilter('toOgImage', (url) => (url + '?fm=jpg&q=70&w=1200&h=630&fit=thumb') )
  
  // fix eventually not valid absolute urls
  eleventyConfig.addFilter('absoluteUrl', (url) => normalizeSlug(url) )

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
