module.exports = function(karma) {
  var common = require('../../tools/test/karma-common.conf.js');
  karma.set(common.mixin_common_opts(karma, {
    // base path, that will be used to resolve files and exclude
    basePath: '../..',
    preprocessors: {
      'component-counter/test/fixtures/*.html': ['html2js']
    },
    // list of files / patterns to load in the browser  ORDER MATTERS
    files: [
      'tools/test/mocha-htmltest.js',
      'component-counter/conf/mocha.conf.js',
      'component-counter/node_modules/chai/chai.js',
      'appmaker/public/vendor/polymer/polymer.min.js',
      'appmaker/public/vendor/mocha/mocha.js',
      {pattern: 'component-counter/test/fixtures/*.html', included: true},
      'component-counter/test/js/counter.js',
      {pattern: 'appmaker/public/ceci/*.html', included: false},
      {pattern: 'appmaker/public/ceci/test/fixtures/*.html', included: false},
      {pattern: 'appmaker/public/ceci/app.js', included: false},
      {pattern: 'component-counter/test/**/*.js', included: false},
      {pattern: 'component-counter/test/**/*.html', included: false},
      {pattern: 'component-counter/*.html', included: false},
      {pattern: 'component-counter/*.js', included: false},
      {pattern: 'component-counter/*.css', included: false},
      {pattern: 'tools/**/*.js', included: false},
    ]
  }));
};
