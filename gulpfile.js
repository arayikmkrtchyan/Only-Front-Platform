var gulp    = require('gulp'),
  config    = require('./gulp/config'),
  del       = require('del'),
  concat    = require('gulp-concat'),
  uglify    = require('gulp-uglify'),
  rename    = require("gulp-rename"),
  concatCss = require('gulp-concat-css'),
  minifyCss = require('gulp-minify-css'),
  htmlmin   = require('gulp-htmlmin'),
  watch     = require('gulp-watch');


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
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.public.css))
  ;
},

/** CSS vendor concat ans minify */
job_vendor_css = function() {
  gulp.src(config.src.cssVendor.concat(config.project.cssVendor))
    .pipe(concatCss('vendor.css'))
    .pipe(gulp.dest(config.public.css))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.public.css))
  ;
},

/** Images copy to public */
job_images = function() {
  gulp.src([config.src.imgFiles, config.project.imgFiles])
    .pipe(htmlmin({collapseWhitespace: true}))
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
  gulp.src([config.src.htmlIndexFile, config.project.htmlIndexFile])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.public.root))
  ;
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
