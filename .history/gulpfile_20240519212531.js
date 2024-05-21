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
    done()
});
