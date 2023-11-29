const { series, parallel, src, dest, watch } = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const clean = require("gulp-clean");
const imagemin = require("gulp-imagemin");
const purgecss = require("gulp-purgecss");
const cleancss = require("gulp-clean-css");
const plumber = require("gulp-plumber");
const webpack = require('webpack-stream');
const htmlmin = require('gulp-htmlmin');

const paths = {
  ejs: {
    src: ["src/ejs/**/*.ejs", "!" + "src/ejs/**/_*.ejs"],
    dest: "./dist/",
    target: ["src/ejs/**/*.ejs"],
    restore: ["./dist/**/*.html"],
  },
  css: {
    src: "./src/scss/**/*.scss",
    dest: "./dist/css/",
    restore: "./dist/css/common.css",
  },
  js: {
    src: "./src/js/**/*.js",
    entry: "./src/js/main.js",
    dest: "./dist/js/",
    restore: "./dist/js/common.js",
  },
  image: {
    src: ["src/img/**/*"],
    dest: ["dist/img"],
  },
  misc: {
    src: ["src/misc/**/*"],
    dest: ["dist/misc"],
  },
};

const filename = {
  js: 'common.js',
}

//---------------------------------------------------
// BROWSERSYNC
//---------------------------------------------------
function reload(cb) {
  browserSync.reload();
  cb();
}

function serve() {
  browserSync.init({
    browserSync: {
      baseDir: "./dist/",
      index: "index.html",
    },
    server: {
      baseDir: "./dist/",
      index: "index.html",
    },
  });
}

//---------------------------------------------------
// HTML(EJS)
//---------------------------------------------------
function buildHtml() {
  return src(paths.ejs.src)
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(htmlmin({ removeComments : true }))
    .pipe(dest(paths.ejs.dest));
}
function htmlClear() {
  return src(paths.ejs.restore, { allowEmpty: true }).pipe(clean());
}


//---------------------------------------------------
// CSS
//---------------------------------------------------
function buildStyles() {
  return src(paths.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      postcss([
        require('postcss-sort-media-queries')({
          sort: 'mobile-first'
        }),
        require("autoprefixer")({
          grid: "autoplace",
          cascade: false,
        })
      ])
    )
    .pipe(cleancss())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(paths.css.dest));
}

function cssClear() {
  return src(paths.css.restore, { allowEmpty: true }).pipe(clean());
}

//---------------------------------------------------
// JS
//---------------------------------------------------

function buildJs() {
  return src(paths.js.src)
    .pipe(plumber())
    .pipe(webpack({
      mode: 'development', // または 'production'
      entry: {
        main: paths.js.entry,
      },
      output: {
        filename: 'common.js',
      },
    }))
    .pipe(dest(paths.js.dest));
}

function jsClear() {
  return src(paths.js.restore, { allowEmpty: true }).pipe(clean());
}

//---------------------------------------------------
// Image
//---------------------------------------------------
function copyImage() {
  return src(paths.image.src).pipe(imagemin()).pipe(dest(paths.image.dest))
}
function imageClear() {
  return src(paths.image.dest, { allowEmpty: true }).pipe(clean());
}

//---------------------------------------------------
// Misk
//---------------------------------------------------
function copyMisc() {
  return src(paths.misc.src).pipe(dest(paths.misc.dest));
}

//---------------------------------------------------
// Watch
//---------------------------------------------------
function watchSrc() {
  watch(paths.css.src, buildStyles);
  watch(paths.ejs.target, buildHtml);
  watch(paths.js.src, buildJs);
  watch(paths.image.src, copyImage);
  watch(paths.misc.src, copyMisc);

  watch("./dist/**/*", reload);
}

//---------------------------------------------------
// Public tasks
//---------------------------------------------------
exports.build = series(
  htmlClear,
  cssClear,
  jsClear,
  imageClear,
  parallel(buildHtml, buildStyles, buildJs, copyImage, copyMisc)
);

exports.default = series(
  htmlClear,
  cssClear,
  jsClear,
  imageClear,
  parallel(buildStyles, buildHtml, buildJs, copyImage, copyMisc),
  parallel(watchSrc, serve)
);
