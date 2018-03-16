import gulp from 'gulp';
import paths from './paths';

const sprites = require('gulp-svg-sprites');

export const svgSpriteSheet = gulp.task('svgSpriteSheet', (done) => {
  gulp.src(paths.svg.src)
    .pipe(sprites({ mode: 'symbols' }))
    .pipe(gulp.dest(paths.svg.dest));
  done();
});

export default svgSpriteSheet;
