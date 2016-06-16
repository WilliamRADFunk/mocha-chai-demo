var gulp = require('gulp');
var chai = require('chai');
var print = require('gulp-print');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var jsDocConversion = './node_modules/.bin/jsdoc src/chai-test.js && rm -rf docs/* && mv out/* docs/ && rm -rf out/';

var callback = function()
{
	return '';
}
// One of the ways to make sure Gulp does it's tasks in the order specified (Otherwise race condtions can occur).
gulp.task('callback', function()
{
	return callback();
});

gulp.task('js-doc', shell.task([jsDocConversion]));

gulp.task('default', function()
{
	runSequence('js-doc', 'callback');
});