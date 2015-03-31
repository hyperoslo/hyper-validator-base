var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var bundler = watchify(browserify(watchify.args));

bundler.add('./index.js');

bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Bundle Error'))
    .pipe(source('hyper-validator-base.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('build', bundle);

gulp.task('default', ['build']);
