// This file is not transpiled, so use ES5

// Set babel up to transpile the test file, so tests can be written in ES6+
require("babel-register")();

// Disable css webpack b/c mocha dosn't like css
require.extensions['.css'] = function() {};