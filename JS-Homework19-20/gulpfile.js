'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var uglyfly = require('gulp-uglyfly');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');

var paths = {
    src: {
        html: 'src/*.html',
        css: 'src/sass/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.*',
        resetCss: 'src/tools/reset.css',
        jQuery: 'src/lib/jQuery/*.*'
    },
    dist: {
        html: 'dist/',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img',
        jQuery: 'dist/lib/jQuery'
    },
    watch: {
        html: 'src/**/*.html'
    },
    clean: 'dist/'
};

// var serverConfig = {
//     server: {
//         baseDir: 'dist'
//     },
//     host: 'localhost',
//     port: 9000,
//     logPrefix: 'Buuu',
//     notify: false
// };

gulp.task('bundleHtml', function(){
    return gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleCss', function(){
    return gulp.src(paths.src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(concat('style.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleJs', function(){
    return gulp.src(paths.src.js)
    .pipe(concat('scripts.js'))
    // .pipe(uglyfly())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleImg', function(){
    return gulp.src(paths.src.img)
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleResetCss', function(){
    return gulp.src(paths.src.resetCss)
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundlejQuery', function(){
    return gulp.src(paths.src.jQuery)
    .pipe(gulp.dest(paths.dist.jQuery))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('webServer', function() {
    browserSync.init({
        server: 'dist',
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function(){
    gulp.watch(paths.src.css, ['bundleCss']);
    gulp.watch(paths.watch.html, ['bundleHtml']);
    gulp.watch(paths.src.js, ['bundleJs']);
    gulp.watch(paths.src.img, ['bundleImg']);
    gulp.watch(paths.src.resetCss, ['bundleResetCss']);
    gulp.watch(paths.src.jQuery, ['bundlejQuery']);
});

gulp.task('cleanDist', function(){
    return del.sync(paths.clean);
});

gulp.task('start',['cleanDist','bundleHtml','bundleCss','bundleJs','bundleImg','bundleResetCss','bundlejQuery','webServer','watch']);