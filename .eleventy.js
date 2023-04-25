const htmlmin = require('html-minifier')
require('dotenv').config()
const { DateTime } = require("luxon");
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS, INLINES, TABLE_BLOCKS } = require('@contentful/rich-text-types');
const helpers = require('./src/_data/helpers');
const { normalizeSlug } = require('./src/_data/helpers');

const now = String(Date.now())

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
    [INLINES.HYPERLINK]: (node, next) => {
      return `<a class="no-underline link-underline link-underline-fixed " href="${node.data.uri}"${node.data.uri.startsWith('https://www.tedxcuneo.com') || node.data.uri.startsWith('/') ? '' : ' target="_blank"'}>${next(node.content)}</a>`;
    },
    [BLOCKS.TABLE]: (node, next) => {
      return `<div class="overflow-x-auto">
          <table class="table-auto overflow-scroll w-full border-collapse border border-white-500 overflow-x-auto">${next(node.content)}</table>
        </div>`;
    },
    [BLOCKS.TABLE_ROW]: (node, next) => {
      return `<tr>${next(node.content)}</tr>`;
    },
    [BLOCKS.TABLE_CELL]: (node, next) => {
      return `<td class="border border-white-500 px-4 py-2">${next(node.content)}</td>`;
    },
    [BLOCKS.TABLE_HEADER_CELL]: (node, next) => {
      return `<td class="border border-white-500 px-4 py-2">${next(node.content)}</td>`;
    }
  }
};

function optionsWithLinks(links){

  let options_new = options;

  options_new.renderNode[INLINES.ENTRY_HYPERLINK]= (node, next) => {
    const link = links.entries.hyperlink.find(
      (h) => h.sys.id === node.data.target.sys.id
    );
    return `<a class="no-underline link-underline link-underline-fixed " href="${normalizeSlug(link.slug)}">${next(node.content)}</a>`;
  };

  return options_new
}

module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addWatchTarget('./src/settings/config.yml')

  eleventyConfig.addPassthroughCopy({
    './_tmp': './style',
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
  
  //render from rich text editor with links
  eleventyConfig.addShortcode('documentToHtmlStringWithLinks', text => documentToHtmlString(text.json, optionsWithLinks(text.links)));
  
  //resize image for og tags {{ page.seo.url | toOgImage }}
  eleventyConfig.addFilter('toOgImage', (url) => (url + '?fm=jpg&q=70&w=1200&h=630&fit=thumb') )
  
  // fix eventually not valid absolute urls
  eleventyConfig.addFilter('absoluteUrl', (url) => helpers.normalizeSlug(url) )

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    if (typeof dateObj === 'string')
      dateObj = new Date(dateObj);
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  })

  eleventyConfig.addFilter('htmlDateToIsoString', (dateObj) => {
    if (typeof dateObj === 'string')
      dateObj = new Date(dateObj);
    return dateObj.toISOString();
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
