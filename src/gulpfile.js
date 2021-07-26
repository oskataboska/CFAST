var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require("gulp-sass")(require('sass'));

const config = {
  scssin: "./components/scss/**/*.scss",
  scssout: "./components/css"
};

gulp.task('imagemin', function() {
  return gulp.src('./imgs-nonoptimized/**/*.{jpg,jpeg,png,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('./imgs-optimized'))
});

gulp.task('sass', function(){
  return gulp.src(config.scssin, {sourcemaps: true})
    .pipe(sass())
    .pipe(gulp.dest(config.scssout, {sourcemaps: '.'}));
});

gulp.task('watch', function(){
  gulp.watch('./components/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./imgs-nonoptimized/**/*.{jpg,jpeg,png,gif}', gulp.series('imagemin'));
});

gulp.task('default', gulp.series('imagemin', 'sass'));