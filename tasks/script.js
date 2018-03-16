import gulp from 'gulp';
import paths from './paths';

const concat = require('gulp-concat');

const compileScript = gulp.task('compileScript', () =>
  gulp.src(paths.scripts.src)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(paths.scripts.dest)));

export default compileScript;
