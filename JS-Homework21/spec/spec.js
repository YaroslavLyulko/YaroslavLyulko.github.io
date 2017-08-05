const Calculator = require('../js/app.js');

describe("Calculator", function() {

  myCalc = new Calculator(100, 200);

  it("isNumbers()", function() {
    // prepare
      let result;
    // act
      result = myCalc.isNumbers();
    // assert
      expect(result).toEqual(true);
  });

  it("add()", function() {
    // prepare
      let result;
    // act
      result = myCalc.add();
    // assert
      expect(result).toEqual(300);
  });

  it("sub()", function() {
    // prepare
      let result;
    // act
      result = myCalc.sub();
    // assert
      expect(result).toEqual(-100);
  });

  it("mul()", function() {
    // prepare
      let result;
    // act
      result = myCalc.mul();
    // assert
      expect(result).toEqual(20000);
  });

  it("div()", function() {
    // prepare
      let result;
    // act
      result = myCalc.div();
    // assert
      expect(result).toEqual(0.5);
  });

});