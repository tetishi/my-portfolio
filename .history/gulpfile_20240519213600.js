var gulp         = require('gulp');
var browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./",
					index: "index.html"
			}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

gulp.task( 'default', gulp.series( gulp.parallel( 'browser-sync' ) ), function(done) {
	gulp.watch( './*.html', gulp.task( 'bs-reload' ) );
	gulp.watch( './css/*.css', gulp.task( 'bs-reload' ) );
	gulp.watch( './js/*.js', gulp.task( 'bs-reload' ) );
    done();
});


var cleanCSS = require('gulp-clean-css');
var rename   = require("gulp-rename");

gulp.task('mincss', function() {
	return gulp.src("css/*.css")
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css/'));
});

var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minjs', function() {
	return gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js/'));
});




var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var imageminMozjpeg = require("imagemin-mozjpeg");

var imageminOption = [
	imageminPngquant({ quality: [0.65, 0.8] }),
	imageminMozjpeg({ quality: 85 }),
	imagemin.gifsicle({
		interlaced: false,
		optimizationLevel: 1,
		colors: 256
	}),
	imagemin.mozjpeg(),
	imagemin.optipng(),
	imagemin.svgo()
];

gulp.task( 'imagemin', function() {
	return gulp
		.src( './img/*.{png,jpg,gif,svg}' )
		.pipe( imagemin( imageminOption ) )
		.pipe( gulp.dest( './img' ) );
});
