#!/usr/bin/env node

var Executor = require('./test_util').Executor;

var passingTests = [
  'node node_modules/protractor/lib/cli.js spec/conf.js',
  'node node_modules/.bin/jasmine spec/unit.js'
];

var executor = new Executor();

passingTests.forEach(function(passing_test) {
  executor.addCommandlineTest(passing_test)
      .assertExitCodeOnly();
});

executor.execute();
