let util = require("./util.js");
let testfiles = util.getTestFiles('test-unit.js');

let injectFiles = [
  './node_modules/angular/angular.js',
  './node_modules/angular-mocks/angular-mocks.js',
  'dist/angularModuleDevSkeleton.min.js',
  ...testfiles
];


module.exports = function (config) {
  config.set({
    basePath: '',
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    files: injectFiles,
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
