// an example of a simple javascript object
var Counter = function(_init) {
    this.start = _init ? _init : 0;
    this.count = this.start;
    
    this.value = function() {
        return this.count;
    };
    
    this.increment = function() {
        ++this.count;  
    };
    
    this.decrement = function() {
        if (this.count > this.start) {
            --this.count;
        }
    };
    
    this.reset = function() {
        this.count = this.start;
    };
}
