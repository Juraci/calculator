class Calculator {
  constructor() {
    this.total = 0;
  }

  input(input) {
    input = input.split('');
    var total = this.total;
    var flag = '';
    input.forEach(function(element) {
      if( element === '+' ){
          flag = '+';
          return;
      }
      if( element === '-' ){
          flag = '-';
          return;
      }
      if (flag === '') {
          total = parseInt(element);
      }
      if(flag === '+'){
        total = this.sum(total, parseInt(element));
      }
      if (flag === '-') {
          total = this.sub(total, parseInt(element));
      }
    }.bind(this));
    this.total = total;
  }

  sum(x,y){
    return x+y;
  }

  sub(x,y){
    return x-y;
  }

  run() {
  }

  getTotal() {
    return this.total;
  }
}

module.exports = Calculator;
