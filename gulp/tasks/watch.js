var gulp = require('gulp');
var config = require('../config');
var watchify = require('./browserify');

/**
 * Watches for assets changes
 *
 * @param callback {Function}
 */
gulp.task('watch', ['watchify'], function (callback) {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.slim.src, ['slim']);
  gulp.watch(config.images.src, ['images']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});