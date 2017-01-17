var total;

class Calculator {
  constructor() {
    total = 0;
  }

  input(input) {
    input = input.split('+');
    input.forEach(function(number) {
     total = total + parseInt(number);
    });
  }

  run() {
  }

  total() {
    return total;
  }
}

module.exports = Calculator;
