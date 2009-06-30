// an example of inheritance and polimorphism in javascript
var Operation = function(_a, _b) {
    this.a = _a;
    this.b = _b;
    this.calculate = function() {}; 
};
 
var Sum = function(_a, _b) {
    this.base = Operation;
    this.base(_a, _b);
    this.calculate = function() {return this.a + this.b};
};
 
var Subtraction = function(_a, _b) {
    this.base = Operation;
    this.base(_a, _b);
    this.calculate = function() {return this.a - this.b};
};

function createOperation(operator, a, b) {
    switch(operator) {
        case '+': return new Sum(a, b);
        case '-': return new Subtraction(a, b);
    }
}
