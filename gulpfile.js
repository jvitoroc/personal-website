var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require("autoprefixer");
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function() {
    var plugins = [
      autoprefixer({browsers: ['last 1 version']}),
    ];
    return gulp.src(["./css/normalize.css",
      "./css/bootstrap-grid.min.css",
      "./css/main.css",
      "./css/hamburgers.min.css",
      "./css/style.css",
      "./css/mediaqueries.css",
      "./css/jquery.fullpage.min.css"])
    .pipe(postcss(plugins))
    .pipe(cleanCSS())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
    return gulp.src(["./js/vendor/jquery-3.3.1.min.js",
      "./js/vendor/jquery.fullpage.js",
      "./js/vendor/isotope.js",
      "./js/plugins.js",
      "./js/main.js"])
    .pipe(concat("build.js"))
    .pipe(gulp.dest("./build"))
    .pipe(rename("script.js"))
    .pipe(babel({presets: ['env']}))
    .pipe(minify({ignoreFiles: ['jquery-3.3.1.min.js']}))
    .pipe(gulp.dest('./build'))
});

gulp.task('html', function() {
  return gulp.src("./src/index-src.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(rename("index.html"))
  .pipe(gulp.dest('./'))
});

gulp.task('build', ['js', 'css', 'html']);