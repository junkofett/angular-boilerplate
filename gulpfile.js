"use strict";

var bower   = require("gulp-bower"),
    concat  = require("gulp-concat"),
    connect = require("gulp-connect"),
    gulp    = require("gulp"),
    plumber = require("gulp-plumber"),
    sass    = require("gulp-sass"),
    uglify  = require('gulp-uglify');

var config = {
  bowerDir: './bower_components',
  sassPath: './app/**/*.scss',
  htmlPath: ['./app/**/*.html', './index.html'],
  jsPath: ['./app/*.js',
           './app/**/*.module.js',     './app/**/*.controller.js',
           './app/**/*.directive.js',  './app/**/*.component.js',
           './app/**/config.route.js']
};

gulp.task('connect', function () {
  connect.server({
    port: 8080,
    livereload: true
  });
});

gulp.task("sass", function(){
  gulp.src(config.sassPath)
    .pipe(plumber())
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("./css"))
    .pipe(connect.reload());
});

gulp.task("html", function(){
  gulp.src(config.htmlPath)
    .pipe(connect.reload());
});

gulp.task("js", function(){
  gulp.src(config.jsPath)
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("./js"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(config.sassPath, ["sass"]);
  gulp.watch(config.htmlPath, ["html"]);
  gulp.watch(config.jsPath, ["js"]);
});

gulp.task("build", ["sass", "js"]);

gulp.task("serve", ["connect", "watch", "js"]);