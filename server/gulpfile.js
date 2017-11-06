/*jshint esversion: 6 */

const gulp = require('gulp');
const nodemon = require("gulp-nodemon");
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const ENV_FILES = ['src/.env'];

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('bin'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', () => {
    gulp.src(JSON_FILES).pipe(gulp.dest('bin'));
    gulp.src(ENV_FILES).pipe(gulp.dest('bin'));
    gulp.src('resources/Northwind_large.sqlite').pipe(gulp.dest('bin/resources'));
    return gulp;
});

gulp.task('server', () => {
    nodemon({
        script: "bin/index.js",
        env: { "NODE_ENV": "Development" }
    })
        .on("restart", () => {
            console.log("restarted");
        });
});

gulp.task('default', ['watch', 'assets', 'server']);