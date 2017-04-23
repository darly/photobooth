import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import { loadTasks, loadCompositeTasks } from './tools/utils';


loadTasks(Config.SEED_TASKS_DIR);
loadTasks(Config.PROJECT_TASKS_DIR);
// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence(//'clean.dev',
              //'tslint',
              //'css-lint',
              'build.assets.dev',
              'build.html_css',
              'build.js.dev',
              'build.index.dev',
              done));

// --------------
// Build dev watch.
gulp.task('build.dev.watch', (done: any) =>
  runSequence('build.dev',
              'watch.dev',
              done));

// --------------
// Build e2e.
gulp.task('build.e2e', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.assets.dev',
              'build.js.e2e',
              'build.index.dev',
              done));

// --------------
// Build prod.
gulp.task('build.prod', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'css-lint',
              'build.assets.prod',
              'build.html_css',
              'copy.js.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'build.index.prod',
              done));

// --------------
// Build test.
gulp.task('build.test', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.assets.dev',
              'build.js.test',
              'build.index.dev',
              done));

// --------------
// Build test watch.
gulp.task('build.test.watch', (done: any) =>
  runSequence('build.test',
              'watch.test',
              done));

// --------------
// Build tools.
gulp.task('build.tools', (done: any) =>
  runSequence('clean.tools',
              'build.js.tools',
              done));

// --------------
// Docs
gulp.task('docs', (done: any) =>
  runSequence('build.docs',
              'serve.docs',
              done));
//>>>>>>> Stashed changes

loadCompositeTasks(Config.SEED_COMPOSITE_TASKS, Config.PROJECT_COMPOSITE_TASKS);


// --------------
// Clean dev/coverage that will only run once
// this prevents karma watchers from being broken when directories are deleted
let firstRun = true;
gulp.task('clean.once', (done: any) => {
  if (firstRun) {
    firstRun = false;
    runSequence('check.tools', 'clean.dev', 'clean.coverage', done);
  } else {
    util.log('Skipping clean on rebuild');
    done();
  }
});
