const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
const fileinclude = require('gulp-file-include');

const folder = 'email';

gulp.task('default', async function () {
  await gulp.src(`./src/${folder}/*.html`)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(inlineCss())
    .pipe(gulp.dest(`build/${folder}/`));
});
