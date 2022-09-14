const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  config.setTemplateFormats([
      'html',
      'njk',
      'md',
      'css',
      'jpeg',
      'jpg',
      'png',
      'svg',
      'woff',
      'woff2'
  ]);

  // config.setWatchThrottleWaitTime(1000);
  // config.addPassthroughCopy('static');
  config.addPlugin(syntaxHighlight);
  
  // Return your Object options:
  return {
    dir: {
      data: './data',
      includes: './templates/',
      input: 'src/views',
      layouts: './templates/layouts',
      output: 'build'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
};
