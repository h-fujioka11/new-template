'use strict';

// gulpプラグインの読み込み
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] });
const packageImporter = require('node-sass-package-importer');
const autoprefixer = require("autoprefixer");
const bulkSass = require('gulp-sass-bulk-import');
const cssDeclarationSorter = require('css-declaration-sorter');


// VARIABLES
// - - - - - - - - - - - - - - -
const ROOT_PATH = './';
const SRC_PATH = './src/';
const DIST_PATH = './assets/';

// config
const config = {
  sass: {
    files: [
      `${SRC_PATH}sass/**/*.scss`,
    ],
    watchFiles: [
      `${SRC_PATH}sass/*`,
      `${SRC_PATH}sass/**/*`,
    ],
    output: `${DIST_PATH}css/`,
  },
};


gulp.task( 'copy', function() {
    return gulp.src(
        [ `${DIST_PATH}images/**`],
        { base: `${DIST_PATH}` }
    )
    .pipe( gulp.dest( 'static' ) );
} );


gulp.task('sass', () => {
  const builder = gulp.src(config.sass.files)
    .pipe(bulkSass())
    .pipe(gulpLoadPlugins.sass({
      importer: packageImporter({
        extensions: ['.scss', '.css', '.sass'],
      }),
    }))
    .pipe(gulpLoadPlugins.postcss([
      autoprefixer({
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
        cascade: false
      }),
      cssDeclarationSorter({order: 'smacss'}),
    ]))
    //.pipe(gulp.dest(config.sass.output))
    .pipe(gulp.dest(config.sass.output))
  return builder;
});

gulp.task('watch', function(){
  gulp.watch(config.sass.files, gulp.task('sass'));
});

gulp.task('default', gulp.series('copy','watch'));
