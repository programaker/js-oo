var MathOperation = function(a, b) {
    this._a = a;
    this._b = b;
    this.calculate = function() { };
};

 
var Sum = function(a, b) {
    MathOperation.call(this, a, b);
    this.calculate = function() { return this._a + this._b };
};

Sum.prototype = new MathOperation();


var Subtraction = function(a, b) {
    MathOperation.call(this, a, b);
    this.calculate = function() { return this._a - this._b };
};

Subtraction.prototype = new MathOperation();


function createMathOperation(operator, a, b) {
    switch(operator) {
        case '+': return new Sum(a, b);
        case '-': return new Subtraction(a, b);
    }
};
