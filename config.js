/**
 * Current Project name [dir name]
 */
var projectName = 'demo';

module.exports = {
  src: {
    jsFiles: [
      './src/js/app.js',
      './src/js/route.js',
      './projects/' + projectName + '/js/route.js',
      './src/js/factory/Route.js',
      './src/js/factory/PubSub.js',
      './src/js/factory/Connector.js',
      './src/js/interceptors/**/*.js',
      './src/js/directives/**/*.js',
      './src/js/services/**/*.js',
      './src/js/controllers/**/*.js',
    ],
    jsVendor: [
      './bower_components/angular/angular.min.js',
      './bower_components/angular-route/angular-route.min.js',
      './bower_components/jquery/dist/jquery.min.js'
    ],
    jsTestFiles: [
      './src/tests/unit/**/*.js',
    ],
    cssFiles: './src/css/**/*.css',
    cssVendor: [],
    htmlFiles: './src/html/**/*.html',
    htmlIndexFile: './src/index.html',
    imgFiles: './src/images/**/*',
    restFiles: './src/rest/**/*',
  },
  project: {
    jsFiles: [
      './projects/' + projectName + '/js/interceptors/**/*.js',
      './projects/' + projectName + '/js/directives/**/*.js',
      './projects/' + projectName + '/js/services/**/*.js',
      './projects/' + projectName + '/js/controllers/**/*.js',
    ],
    jsVendor: [],
    jsTestFiles: [],
    cssFiles: './projects/' + projectName + '/css/**/*.css',
    cssVendor: [],
    htmlFiles: './projects/' + projectName + '/html/**/*.html',
    htmlIndexFile: './projects/' + projectName + '/index.html',
    imgFiles: './projects/' + projectName + '/images/**/*',
    restFiles: './projects/' + projectName + '/rest/**/*',
  },
  public: {
    root : './public/',
    js   : './public/js/',
    css  : './public/css/',
    html : './public/html/',
    img  : './public/images/',
    rest : './public/rest/',
  },
  context: {
    ENV: 'development',  // development | production
    DEBUG: true,
  }
};
