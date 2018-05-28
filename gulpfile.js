const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');


gulp.task('vendor', () => {
    gulp.src('./src/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/js'));
});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss','./src/scss/**/*.scss'])
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './src/css/*.css',
      '!./src/css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

gulp.task('htmlCopy', function() {
    return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./dist'))

});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Default task
gulp.task('default', ['css', 'vendor','htmlCopy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

// Dev task
gulp.task('dev', ['css', 'vendor','htmlCopy','browserSync'], function() {
  gulp.watch('./scss/*.scss', ['css']);
  gulp.watch('./*.html', browserSync.reload);
});
