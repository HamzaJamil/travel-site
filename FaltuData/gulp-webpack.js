var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

var src = {
    scss: 'app/sass/**/*.scss',
    css: 'app/css',
    html: 'app/*.html',
    jsFile: 'app/src/**/*.js',
    // jsEntryFile = 'app/src/index.js',
    // jsBundle = 'app/js/bundle.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'webpack'], function () {
    browserSync.init({
        server: './app',
        notify: false
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.jsFile, ['webpack']);
    gulp.watch(src.html).on('change', reload);

});

// Compile sass into CSS
gulp.task('sass', function () {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({
            stream: true
        }));
});

//webpack integrate
gulp.task('webpack', function () {
    return gulp.src('app/src/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('/app/js'));


});

gulp.task('default', ['serve']);