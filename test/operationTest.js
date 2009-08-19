var sum = null;
var subtraction = null;

TestCase('OperationTest', {
    setUp: function() {
        sum = createOperation('+', 2, 2);
        subtraction = createOperation('-', 2, 2);
    },

    testCalculate: function() {
        assertEquals('it should calculate the sum', 4, sum.calculate());
        assertEquals('it should calculate the subtraction', 0, subtraction.calculate());
    }
});
