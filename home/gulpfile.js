/*jshint esversion: 6 */

const gulp = require('gulp'),
    webServer = require('gulp-webserver'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'), 
    serveStatic = require('serve-static');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('html', () => { gulp.src('www/**/*.html'); });

gulp.task('css', () => { gulp.src('www/**/*.css'); });

gulp.task('tsc', function () {
    const tsResult = tsProject.src().pipe(tsProject());
    tsResult.pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'));
    return tsResult.js.pipe(gulp.dest('bin'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['tsc']);
    gulp.watch('www/**/*.html', ['html']);
    gulp.watch('www/**/*.css', ['css']);
});

gulp.task('webserver', () => {
    gulp.src('www')
        .pipe(webServer({
            livereload: true,
            open: true,
            port: 8081, 
            middleware: [serveStatic(__dirname)]
        }));
});

gulp.task('default', ['tsc', 'watch', 'webserver']);