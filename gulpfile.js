'use strict';

var gulp     = require('gulp'),
  config     = require('./config'),
  del        = require('del'),
  concat     = require('gulp-concat'),
  uglify     = require('gulp-uglify'),
  rename     = require("gulp-rename"),
  concatCss  = require('gulp-concat-css'),
  cssnano    = require('gulp-cssnano'),
  htmlmin    = require('gulp-htmlmin'),
  preprocess = require('gulp-preprocess'),
  inject     = require('gulp-inject');

// Implements job
var
/** JS app concat and uglify */
job_app_js = function () {
  gulp.src(config.src.jsFiles.concat(config.project.jsFiles))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.public.js))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(config.public.js))
  ;
},

/** JS vendor concat and uglify */
job_vendor_js = function () {
  gulp.src(config.src.jsVendor.concat(config.project.jsVendor))
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(config.public.js))
  ;
},

/** CSS style concat ans minify */
job_style_css = function() {
  gulp.src([config.src.cssFiles, config.project.cssFiles])
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest(config.public.css))
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.public.css))
  ;
},

/** CSS vendor concat ans minify */
job_vendor_css = function() {
  gulp.src(config.src.cssVendor.concat(config.project.cssVendor))
    .pipe(concatCss('vendor.css'))
    .pipe(gulp.dest(config.public.css))
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.public.css))
  ;
},

/** Images copy to public */
job_images = function() {
  gulp.src([config.src.imgFiles, config.project.imgFiles])
    .pipe(gulp.dest(config.public.img))
  ;
},

/** HTML copy to public and compress */
job_html = function() {
  gulp.src([config.src.htmlFiles, config.project.htmlFiles])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.public.html))
  ;
},

/** HTML index copy to public and compress */
job_html_index = function() {

  var target = gulp.src(config.src.htmlIndexFile);

  if(config.context.DEBUG) {
    var files = [];
    files = files.concat(config.src.jsFiles);
    files = files.concat(config.project.jsFiles);
    files.push(config.src.cssFiles);
    files.push(config.project.cssFiles);
    var sources = gulp.src(files, {read: false});
    target.pipe(inject(sources));
  } else {
    target.pipe(htmlmin({collapseWhitespace: true}))
  }
  target.pipe(preprocess({context : config.context}));
  target.pipe(gulp.dest(config.public.root));
},

/** REST json files copy to public rest folder */
job_rest = function() {
  gulp.src([config.src.restFiles, config.project.restFiles])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.public.rest))
  ;
};
// Implements job !end


// Register gulp tasks

gulp.task('deploy', function () {
  config.context.DEBUG = false;
  config.context.ENV = 'production';

  // delete all public dir
  del(config.public.root);

  job_app_js();
  job_vendor_js();
  job_style_css();
  job_vendor_css();
  job_images();
  job_html();
  job_html_index();
  job_rest();

});

gulp.task('watch', function () {

  gulp.watch(config.src.jsFiles.concat(config.project.jsFiles),        job_app_js     );
  gulp.watch([config.src.cssFiles, config.project.cssFiles],           job_style_css  );
  gulp.watch([config.src.imgFiles, config.project.imgFiles],           job_images     );
  gulp.watch([config.src.htmlFiles, config.project.htmlFiles],         job_html       );
  gulp.watch([config.src.htmlIndexFile, config.project.htmlIndexFile], job_html_index );
  gulp.watch([config.src.restFiles, config.project.restFiles],         job_rest       );

});

gulp.task('develop', function () {
  config.context.DEBUG = true;
  config.context.ENV = 'development';
  job_html_index();

  var files = [];
  files = files.concat(config.src.jsFiles);
  files = files.concat(config.project.jsFiles);
  files.push(config.src.cssFiles);
  files.push(config.project.cssFiles);
  files.push(config.src.htmlIndexFile);
  files.push(config.project.htmlIndexFile);
  return gulp.watch(files, job_html_index);

});
