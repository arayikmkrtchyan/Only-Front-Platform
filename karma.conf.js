var config = require('./config');

var files = [];
files = files.concat(config.src.jsVendor);
files = files.concat(config.src.jsFiles);
files = files.concat(config.src.jsTestFiles);
files = files.concat(config.project.jsVendor);
files = files.concat(config.project.jsFiles);
files = files.concat(config.project.jsTestFiles);

var preprocessors = {}, i = 0;

for(i = 0; i < config.src.jsFiles.length; ++i) {
  preprocessors[config.src.jsFiles[i]] = ['coverage'];
}
for(i = 0; i < config.project.jsFiles.length; ++i) {
  preprocessors[config.project.jsFiles[i]] = ['coverage'];
}


module.exports = function (karmaConfig) {
  karmaConfig.set({

    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: files,

    preprocessors: preprocessors

  });
};
