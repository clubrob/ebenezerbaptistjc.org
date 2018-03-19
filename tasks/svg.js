import gulp from 'gulp';
import paths from './paths';

const sprites = require('gulp-svg-sprite');

const config = {
  mode: {
    symbol: true,
  },
};

export const svgSpriteSheet = gulp.task('svgSpriteSheet', (done) => {
  gulp.src(paths.svg.src)
    .pipe(sprites(config))
    .pipe(gulp.dest(paths.svg.dest));
  done();
});

export default svgSpriteSheet;
