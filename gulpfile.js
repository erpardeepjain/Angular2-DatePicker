var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');
var config = require('./gulp.config')();

gulp.task('ts-lint', function () {
	return gulp.src(config.allTs)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}))
})

gulp.task('compile-ts', function () {
	var sourceTsFiles = [
		config.allTs,
		config.allcompoTs
	];

	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function () {

	gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
	gulp.watch([config.allcompoTs], ['ts-lint', 'compile-ts']);
	
	browserSync({
		port: 8081,
		files: [
			config.index, 
			'src/*.html', 
			'src/*.css', 
			'./dist/*.js', 
			'src/**/**/*.html', 
			'dist/**/**/*.js', 
			'dist/**/*.js', 
			'src/**/**/*.css'
			],
		injectChanges: true,
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		server: {
			middleware: superstatic({ debug: true })
		}
	});

});
gulp.task('default', ['serve']);