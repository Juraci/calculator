var { defineSupportCode } = require('cucumber');
var Calculator = require('../../lib/Calculator');

defineSupportCode(function({ Given, When, Then }) {

  Given(/^the input "(\S+)"$/, function(value, callback) {
    var calculator = new Calculator();
    calculator.input(value);
    callback();
  });

});
