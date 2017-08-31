
var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

gulp.task('validate', function () {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.allJsfiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));        
});

gulp.task('styles', function () {
    log('Compliling less to CSS');

    return gulp
        .src(config.less)
        .pipe($.less())
        .pipe(gulp.dest(config.temp));         
});


function log(msg){
    if(typeof(msg)=== 'object') {
        for (var item in msg) {
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.green(msg[item]));
            }
        }
    } else{
        $.util.log($.util.colors.green(msg));
    }

}