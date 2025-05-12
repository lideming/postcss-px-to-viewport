const postcss = require('postcss');
const pxToViewport = require('./index.js');

// Test CSS
const css = '.app { width: 12px; height: 16px; }';

// Plugin options
const options = {
  viewportWidth: 600,
  pxContainer: '.no-vw'
};

// Process the CSS
const processedCss = postcss([pxToViewport(options)]).process(css, { from: undefined }).css;

// Output the result
console.log('Original CSS:');
console.log(css);
console.log('\nProcessed CSS:');
console.log(processedCss);