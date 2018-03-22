import gulp from 'gulp';
// import babel from 'gulp-babel';
// import webpack from 'webpack-stream';
// import uglify from 'gulp-uglify';
import paths from './paths';

// const babelPath = `${paths.scripts.root}/modules/**/*.js`;
// const babelDest = paths.scripts.root;
const webpackEntry = `${paths.scripts.root}/entry.js`;
const finalDest = paths.scripts.dest;

gulp.task('bundleUp', () =>
  gulp.src(paths.scripts.src)
    .pipe(gulp.dest(finalDest)));

const compileScript = gulp.task('compileScript', gulp.series('bundleUp'));

export default compileScript;
