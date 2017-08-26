'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var uglyfly = require('gulp-uglyfly');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var sassGlobImport = require('gulp-sass-glob-import');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');
var gulpif = require("gulp-if");

var paths = {
    src: {
        html: 'src/*.html',
        cssGlobalImport: 'src/sass/core/tools/',
        css: ['src/sass/core/*.scss', 'src/sass/**/*.scss'],
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.*',
        icons: 'src/icons/*.png',
        jQuery: 'src/lib/jQuery/*.*',
        masonry: 'src/lib/Masonry/*.*'
    },
    dist: {
        html: 'dist/',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img',
        sprite: 'dist/img/sprite',
        jQuery: 'dist/lib/jQuery',
        masonry: 'dist/lib/Masonry'
    },
    watch: {
        html: 'src/**/*.html'
    },
    clean: 'dist/'
};

gulp.task('bundleHtml', function(){
    return gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleCss', function(){
    return gulp.src(paths.src.css)
    .pipe(sassGlobImport())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [paths.src.cssGlobalImport, 'node_modules/susy/sass']
    })
    .on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    // .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({stream:true}))
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
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()],
        interlaced: true
      }))
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundlejQuery', function(){
    return gulp.src(paths.src.jQuery)
    .pipe(gulp.dest(paths.dist.jQuery))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleMasonry', function(){
    return gulp.src(paths.src.masonry)
    .pipe(gulp.dest(paths.dist.masonry))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleSprite', function () {
    var spriteData = gulp.src(paths.src.icons)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      imgPath: '../img/sprite/sprite.png'
    }))
    .pipe(gulpif('*.png', gulp.dest('./src/img/sprite/')))
    .pipe(gulpif('*.scss', gulp.dest('./src/sass/core/')))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('webServer', function() {
    browserSync.init({
        server: 'dist',
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function(){
    gulp.watch(paths.watch.html, ['bundleHtml']);
    gulp.watch(paths.src.css, ['bundleCss']);
    gulp.watch(paths.src.js, ['bundleJs']);
    gulp.watch(paths.src.img, ['bundleImg']);
    gulp.watch(paths.src.icons, ['bundleSprite']);
    gulp.watch(paths.src.jQuery, ['bundlejQuery']);
    // gulp.watch(paths.src.Masonry, ['bundleMasonry']);
});

gulp.task('cleanDist', function(){
    return del.sync(paths.clean);
});

gulp.task('start',['cleanDist','bundleHtml','bundleCss','bundleJs','bundleImg','bundlejQuery','bundleMasonry','webServer','bundleSprite','watch']);