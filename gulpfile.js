var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var size = require('gulp-size')
var cleanCSS = require('gulp-clean-css')

function clean(cb) {
  cb()
}

function buildStyle(cb) {
  gulp
    .src('./src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie7', level: 2 }))
    .pipe(concat('index.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ gzip: true, showFiles: true }))

  cb()
}

function watch(watchCb) {
  gulp.watch(['./src/**/*.scss'], function(cb) {
    buildStyle(cb)
    watchCb()
  })
}

exports.watch = gulp.series(clean, watch)
exports.default = gulp.series(clean, buildStyle)
