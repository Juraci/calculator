var { expect }  = require('chai');
var { defineSupportCode } = require('cucumber');
var Calculator = require('../../lib/Calculator');

defineSupportCode(function({ Given, When, Then, Before }) {
  var calculator;

  Before(function() {
    calculator = new Calculator();
  });

  Given(/^the input "(\S+)"$/, function(value, callback) {
    calculator.input(value);
    callback();
  });

  When(/^the calculator is run$/, function (callback) {
    calculator.run();
    callback();
  });

  Then(/^the output should be "(\d+)"$/, function (total, callback) {
    expect(calculator.getTotal()).to.be.equal(total);
    callback();
  });

});
