var gulp = require('gulp');
var rollup = require('rollup');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


//var webserver = require('gulp-webserver')

gulp.task('build', function () {
  return rollup.rollup({
        entry: "./src/pf9-tour.js",
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015'],
      }),
      uglify(),
    ],
  })
    .then(function (bundle) {
      bundle.write({
                format: "iife",
                dest: "./build/pf9-tour.js",
                sourceMap: 'inline',
      });
    })
});

gulp.task('minify', function() {
  pump([
    gulp.src('./build/*.js'),
    uglify(),
    rename({suffix: '.min'}),
    gulp.dest('./')
  ]);
});

gulp.task('clean', function() {
  return gulp.src(['./build', './dist'])
    .pipe(clean());
});

gulp.task('default', function() {
  return runSequence('clean', 'build', 'minify')
});
