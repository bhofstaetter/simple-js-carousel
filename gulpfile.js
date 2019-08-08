var
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoPrefixer = require('gulp-autoprefixer');

gulp.task('scss-frontend', function(){
	gulp.src('*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('.'))
});

gulp.task('watch-frontend', function() {
	gulp.watch('*.scss', ['scss-frontend']);
});

gulp.task('default', ['watch-frontend']);