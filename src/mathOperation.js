var MathOperation = function(_a, _b) {
    this.a = _a;
    this.b = _b;
    this.calculate = function() {}; 
};
 
var Sum = function(_a, _b) {
    this.base = MathOperation;
    this.base(_a, _b);
    this.calculate = function() {return this.a + this.b};
};
 
var Subtraction = function(_a, _b) {
    this.base = MathOperation;
    this.base(_a, _b);
    this.calculate = function() {return this.a - this.b};
};

function createMathOperation(operator, a, b) {
    switch(operator) {
        case '+': return new Sum(a, b);
        case '-': return new Subtraction(a, b);
    }
};
