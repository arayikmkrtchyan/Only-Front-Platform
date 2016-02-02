"use strict";

var gulp     = require("gulp"),
  config     = require("./config"),
  del        = require("del"),
  concat     = require("gulp-concat"),
  uglify     = require("gulp-uglify"),
  rename     = require("gulp-rename"),
  concatCss  = require("gulp-concat-css"),
  cssnano    = require("gulp-cssnano"),
  htmlmin    = require("gulp-htmlmin"),
  preprocess = require("gulp-preprocess"),
  inject     = require("gulp-inject"),
  sequence   = require("gulp-sequence");

// Sub task list
gulp.task("clear-public", function(){
  del(config.public.root);
});

gulp.task("build-app-js", function(){
  return gulp.src(config.src.jsFiles.concat(config.project.jsFiles))
    .pipe(concat("app.js"))
    .pipe(gulp.dest(config.public.js))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest(config.public.js))
  ;
});

gulp.task("build-vendor-js", function(){
  return gulp.src(config.src.jsVendor.concat(config.project.jsVendor))
    .pipe(concat("vendor.min.js"))
    .pipe(gulp.dest(config.public.js))
  ;
});

gulp.task("build-style-css", function(){
  return gulp.src([config.src.cssFiles, config.project.cssFiles])
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest(config.public.css))
    .pipe(cssnano())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(config.public.css))
  ;
});

gulp.task("build-vendor-css", function(){
  return gulp.src(config.src.cssVendor.concat(config.project.cssVendor))
    .pipe(concatCss("vendor.css"))
    .pipe(gulp.dest(config.public.css))
    .pipe(cssnano())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(config.public.css))
  ;
});

gulp.task("copy-images", function(){
  return gulp.src([config.src.imgFiles, config.project.imgFiles])
    .pipe(gulp.dest(config.public.img))
  ;
});

gulp.task("build-html", function(){
  return gulp.src([config.src.htmlFiles, config.project.htmlFiles])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.public.html))
  ;
});

gulp.task("build-index", function(){
  var target = gulp.src(config.src.htmlIndexFile);

  if(config.context.DEBUG) {
    var files = [];
    files = files.concat(config.src.jsFiles);
    files = files.concat(config.project.jsFiles);
    //files.push(config.src.cssFiles);
    //files.push(config.project.cssFiles);
    var sources = gulp.src(files);
    target.pipe(inject(sources, {relative: true}));
  } else {
    target.pipe(htmlmin({collapseWhitespace: true}))
  }
  //target.pipe(preprocess({context : config.context}));
  return target.pipe(gulp.dest(config.public.root));
});

gulp.task("build-rest", function(){
  return gulp.src([config.src.restFiles, config.project.restFiles])
    .pipe(gulp.dest(config.public.rest))
  ;
});


// Register gulp tasks

gulp.task("deploy", function (cb) {
  config.context.DEBUG = false;
  config.context.ENV = "production";

  sequence(
    "clear-public",
    [
      "build-app-js",
      "build-vendor-js",
      "build-style-css",
      "build-vendor-css",
      "copy-images",
      "build-html",
      "build-index",
      "build-rest"
    ]
  )(cb);

});

gulp.task("watch", function () {

  gulp.watch(config.src.jsFiles.concat(config.project.jsFiles),        "build-app-js");
  gulp.watch([config.src.cssFiles, config.project.cssFiles],           "build-style-css");
  gulp.watch([config.src.imgFiles, config.project.imgFiles],           "copy-images");
  gulp.watch([config.src.htmlFiles, config.project.htmlFiles],         "build-html");
  gulp.watch([config.src.htmlIndexFile, config.project.htmlIndexFile], "build-index");
  gulp.watch([config.src.restFiles, config.project.restFiles],         "build-rest");

});

gulp.task("develop", function () {
  config.context.DEBUG = true;
  config.context.ENV = "development";

  gulp.run("build-index");

  var files = [];
  files = files.concat(config.src.jsFiles);
  files = files.concat(config.project.jsFiles);
  files.push(config.src.cssFiles);
  files.push(config.project.cssFiles);
  files.push(config.src.htmlIndexFile);
  files.push(config.project.htmlIndexFile);
  return gulp.watch(files, "build-index");

});
