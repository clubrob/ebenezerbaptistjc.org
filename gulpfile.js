const {src, dest, parallel, series, watch} = require('gulp');
const del = require('del');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

const imagemin = require('gulp-imagemin');

const babel = require('gulp-babel');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-uglify-es').default;

const browser = require('browser-sync').create();
const reload = browser.reload;

function processCSS() {
  return src('./src/scss/style.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(dest('./dist/css'))
    .pipe(browser.stream());
}

function processJS() {
  return src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/js'))
    .pipe(browser.stream());
}

function processImages() {
  return src('./src/images/**/*.{png,jpg}')
    .pipe(imagemin())
    .pipe(dest('./dist/images'))
    .pipe(browser.stream());
}

function processMarkup() {
  return src(['./src/index.html', './src/favicon.ico'])
    .pipe(dest('./dist'))
    .pipe(browser.stream());
}

function browserSyncInit() {
  browser.init({
    server: {
      baseDir: './dist'
    },
    port: 5500
  });
  watch('src/scss/**/*.scss', processCSS);
  watch('src/js/**/*.js', processJS);
  watch('src/index.html', processMarkup);
  watch('src/images/**/*.jpg', processImages);
}

exports.serve = series(processImages, processMarkup, processCSS, processJS, browserSyncInit);

exports.build = series(processImages, processMarkup, processCSS, processJS);
