var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefixer = require("autoprefixer");
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('css', function() {
  var plugins = [
      autoprefixer({browsers: ['last 1 version']}),
  ];
    return gulp.src(["./css/normalize.css",
      "./css/bootstrap-grid.min.css",
      "./css/main.css",
      "./css/style.css"])
    .pipe(postcss(plugins))
    .pipe(cleanCSS())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
    return gulp.src(["./js/jquery-3.3.1.min.js",
      "./js/vendor/jquery.fullpage.js",
      "./js/vendor/isotope.js",
      "./js/plugins.js",
      "./js/main.js"])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat("build.js"))
    .pipe(gulp.dest("./build"))
    .pipe(rename("script.js"))
    .pipe(minify())
    .pipe(gulp.dest('./build'))
});

gulp.task('build', ['js', 'css']);