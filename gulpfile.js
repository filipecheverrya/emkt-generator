const gulp = require('gulp');
const image = require('gulp-image');
const inlineCss = require('gulp-inline-css');
const fileinclude = require('gulp-file-include');

const folder = 'cl-donate';

gulp.task('default', async function () {
  await gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('build/img'));

  await gulp.src(`./src/${folder}/*.html`)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(inlineCss())
    .pipe(gulp.dest(`build/${folder}/`));
});
