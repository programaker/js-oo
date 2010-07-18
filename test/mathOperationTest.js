var sum = null;
var subtraction = null;

TestCase('MathOperationTest', {
    setUp: function() {
        sum = createMathOperation('+', 2, 2);
        subtraction = createMathOperation('-', 2, 2);
    },

    testCalculate: function() {
        assertEquals('it should calculate the sum', 4, sum.calculate());
        assertEquals('it should calculate the subtraction', 0, subtraction.calculate());
    }
});
