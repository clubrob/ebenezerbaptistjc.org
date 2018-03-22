import gulp from 'gulp';
import paths from './paths';

const concat = require('gulp-concat');

/* const compileCustomScript = gulp.task('compileCustomScript', () =>
  gulp.src(paths.scripts.src + 'main.js')
    .pipe(babel({
      presets: ['env'],
    })). */

const compileScript = gulp.task('compileScript', () =>
  gulp.src(paths.scripts.src)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(paths.scripts.dest)));

export default compileScript;
