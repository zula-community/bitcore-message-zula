'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-zula');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
