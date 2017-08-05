class Calculator {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && (typeof n != "string");
  }

  isNumbers() {
    if (this.isNumeric(this.a) && this.isNumeric(this.b)) {
      return true;
    }
  }

  add() {
      if (this.isNumbers()) {
        return (this.a + this.b);
      }
      else return false;
  }

  sub() {
    if (this.isNumbers()) {
        return (this.a - this.b);
      }
      else return false;
  }

  mul() {
    if (this.isNumbers()) {
        return (this.a * this.b);
      }
      else return false;
  }

  div() {
    if (this.isNumbers()) {
        return (this.a / this.b);
      }
      else return false;
  }

}

module.exports = Calculator;