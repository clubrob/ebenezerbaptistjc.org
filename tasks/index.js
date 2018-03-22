import gulp from 'gulp';

// Env
import paths from './paths';
import { reload, server } from './server';

// Tasks
import './style'; // Tasks: compileStyle
import './markup'; // Tasks: compileMarkup
import './script'; // Tasks: compileScript
import './images'; // Tasks: compileImages

const scriptWatch = paths.scripts.src; // `${paths.scripts.root}/modules/**/*.js`;

gulp.task('watchMarkup', () => gulp.watch(paths.markup.src, gulp.series('compileMarkup', reload)));
gulp.task('watchScript', () => gulp.watch(scriptWatch, gulp.series('compileScript', reload)));
gulp.task('watchStyle', () => gulp.watch(paths.styles.src, gulp.series('compileStyle', reload)));

gulp.task('compile', gulp.parallel('compileMarkup', 'compileScript', 'compileStyle'));
gulp.task('watch', gulp.parallel('watchMarkup', 'watchScript', 'watchStyle'));

gulp.task('serve', gulp.series('compile', server));

export const defaultTasks = gulp.parallel('serve', 'watch');
export const imagemin = gulp.series('compileImages');

export default defaultTasks;
