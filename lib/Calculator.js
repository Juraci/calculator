class Calculator {
  constructor() {
    this.total = 0;
  }

  input(input) {
    input = input.split('+');
    var sum = this.total;
    input.forEach(function(number) {
     sum = sum + parseInt(number);
    });
    this.total = sum;
  }

  run() {
  }

  getTotal() {
    return this.total;
  }
}

module.exports = Calculator;
