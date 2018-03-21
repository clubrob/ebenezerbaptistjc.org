import gulp from 'gulp';
import babel from 'gulp-babel';
import paths from './paths';

const concat = require('gulp-concat');

const compileScript = gulp.task('compileScript', () =>
  gulp.src(paths.scripts.src)
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(paths.scripts.dest)));

export default compileScript;
