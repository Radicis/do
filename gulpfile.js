var gulp = require('gulp');
    print = require('gulp-print');  
    babel = require('gulp-babel');
    del = require('del');
    sass = require('gulp-sass');
    webserver = require('gulp-webserver');


gulp.task('clean', (cb) => {
    return del(["build"], cb);
});


gulp.task('watch', function(){
    gulp.watch(["src/**/*.ts"], ['libs', 'sass', 'build']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Compiling.');
    });
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));
});

gulp.task('build', function() {
  return gulp.src('src/**/*.js')               // #1. select all js files in the app folder
        .pipe(print())                           // #2. print each file in the stream
      .pipe(babel({ presets: ['es2015'] }))    // #3. transpile ES2015 to ES5 using ES2015 preset
      .pipe(gulp.dest('build'));               // #4. copy the results to the build folder
});

gulp.task('serve', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('default', ['libs', 'sass', 'build','serve', 'watch']);
