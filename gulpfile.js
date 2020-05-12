var gulp = require('gulp');
var image = require('gulp-image');
var inlineCss = require('gulp-inline-css');

gulp.task('default', async function () {
  await gulp.src('./img/*')
    .pipe(image())
    .pipe(gulp.dest('build/img'));

  await gulp.src('./*.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('build/'));
});


