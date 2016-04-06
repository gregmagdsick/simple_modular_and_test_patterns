const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('mocha');
const chai = require('chai');

//mocha
gulp.tas('testMocha', () => {
  return gulp.src('')
    .pipe()
});

//eslint - inc greeter_test.js and gulp.js
gulp.task('testEslint:testFile', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    'rules':{
      'quotes': [1, 'single'],
      // 'semi': [1, 'always'],
      'indent': ['error', 2]
    },
    'envs':[
      'mocha'
    ]
  }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('testEslint:non-testFile', () => {
  return gulp.src(['index.js', 'lib/**/*.js', 'gulp.js'])
  .pipe(eslint({
    'rules':{
      'quotes': [1, 'single'],
      // 'semi': [1, 'always'],
      'indent': ['error', 2]
    }
    }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('test',['testEslint:non-testFile','testEslint:testFile']);