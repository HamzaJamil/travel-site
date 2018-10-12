var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var usemin = require('gulp-usemin')
var del = require('del')
var rev = require('gulp-rev')
var cssnano = require('gulp-cssnano')
var uglify = require('gulp-uglify')

gulp.task('deleteDistFolder', function () {
    return del('./docs')
})

gulp.task('optimizeImages', ['deleteDistFolder'], function () {
    return gulp.src('./app/images/**/*')
        .pipe(imagemin({
            progressive: true,
            multipass: true

        }))
        .pipe(gulp.dest('./docs/images'))
})

gulp.task('usemin', ['deleteDistFolder'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function () {
                return rev()
            }, function () {
                return cssnano()
            }],
            js: [function () {
                return rev()
            }, function () {
                return uglify()
            }]
        }))
        .pipe(gulp.dest('./docs'))
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin'])