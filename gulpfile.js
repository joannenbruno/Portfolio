'use strict';

var gulp = require('gulp');						// gulping!
var browserSync = require('browser-sync');		// sync browser with code changes!		
var lint = require('gulp-eslint');				// lint JS files!
var imagemin = require('gulp-imagemin');		// optimizing images!
var rename = require('gulp-rename');			// optimizing js
var sourcemaps = require('gulp-sourcemaps');	// sourcemapping!
var uncss = require('gulp-uncss');				// shedding CSS!
var crass = require('gulp-crass');				// minifying CSS!
var concat = require('gulp-concat');			// concat helper
var historyApiFallback = require('connect-history-api-fallback'); // local development helper!

// configuration object
var config = {
	proxyUrl: "http://localhost:8080",
	browser: "chrome",
	port: 8001,
	paths: {
		files: "**/*.*",
		images: "images/**/*.*",
		javascript: "scripts/*.js",
		styles: "styles/*.css",
		angularControllersJs: "scripts/controllers/*.js",
		libJavascript: "scripts/lib/*.js"
	}
}

// destination configuration object
var destConfig = {
	paths: {
		images: 'dist/images',
		javascript: 'dist/scripts',
		styles: 'dist/styles',
		stylesUncss: 'dist/stylesUncss',
		libJavascript: 'dist/scripts/lib'
	}
}

// browser-sync task
gulp.task('browser-sync', done => {
	browserSync.init({
		files: [config.paths.files],
		browser: config.browser,
		port: config.port,
		server: {
			baseDir: './',
			middleware: [historyApiFallback()]
		}
	});
	done();
});

// image task
gulp.task('images', function () {
	return gulp.src(config.paths.images)
		.pipe(imagemin({ progressive: true }))
		.pipe(gulp.dest(destConfig.paths.images));
});

// scripts task
gulp.task('controller-scripts', function () {
	return gulp.src(config.paths.angularControllersJs)
		.pipe(sourcemaps.init())
		.pipe(concat('controllerBundle.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(destConfig.paths.javascript))
});

// scripts task
gulp.task('scripts', gulp.series('controller-scripts'), function () {
	return gulp.src(config.paths.javascript)
		.pipe(concat('bundle.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(destConfig.paths.javascript))
});

// linting task
gulp.task('lint', function () {
	return gulp.src(config.paths.javascript)
		.pipe(lint({ config: 'eslint.config.json' }))
		.pipe(lint.format());
});

//uncss-ing task
gulp.task('uncss', function () {
	return gulp.src(config.paths.styles)
		.pipe(uncss({
			html: ['index.html', 'templates/**/*.html']
		}))
		.pipe(gulp.dest(destConfig.paths.stylesUncss));
});

// crass, used for CSS minification
gulp.task('crass', function () {
	return gulp.src(config.paths.styles)
		.pipe(crass({ pretty: false }))
		.pipe(gulp.dest(destConfig.paths.styles));
});

// watch task for any html/js changes
gulp.task('watch', function () {
	gulp.watch(config.paths.javascript, gulp.series('lint'));
	gulp.watch(config.paths.angularControllersJs, gulp.series('lint'));
	gulp.watch(config.paths.javascript, gulp.series('scripts'));
	gulp.watch(config.paths.angularControllersJs, gulp.series('controller-scripts'));
	gulp.watch(config.paths.images, gulp.series('images'));
	gulp.watch(config.paths.styles, gulp.series('crass'));
});

const defaultTasks = gulp.parallel('browser-sync', 'watch')

// default gulp tasks
gulp.task('default', defaultTasks, function () { });