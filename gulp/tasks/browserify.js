//
// Compiles JS with browserify

var _ = require('lodash'),
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  bundleLogger = require('../util/bundleLogger'),
  config = require('../config').browserify,
  gulp = require('gulp'),
  handleErrors = require('../util/handleErrors'),
  source = require('vinyl-source-stream'),
  es6ify = require('es6ify'),
  uglify = require('gulp-uglify'),
  buffer = require('vinyl-buffer'),
  watchify = require('watchify');

var browserifyTask = function(callback, devMode) {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    if(devMode) {
      _.extend(bundleConfig, watchify.args, { debug: true });
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .add(es6ify.runtime)
        .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js.es6$/))
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished)
        .pipe(browserSync.reload({stream:true}));
    };

    if(devMode) {
      b = watchify(b);
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      if(bundleConfig.require) b.require(bundleConfig.require);
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          callback();
        }
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
