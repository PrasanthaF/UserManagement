
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var util = require('gulp-util');
var gulpprint = require('gulp-print');
var gulpif = require('gulp-if');
var args = require('yargs');

gulp.task('AnalyzeCode', function () {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src([
            './app/**/*.js',
            './*.js'
        ])
        .pipe(gulpif(args.verbose, gulpprint()))
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'));        
});


function log(msg){
    if(typeof(msg)=== 'object') {
        for (var item in msg) {
            if(msg.hasOwnProperty(item)){
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else{
        util.log(util.colors.blue(msg));
    }

}