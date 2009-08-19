var defaultCounter = null;
var initializedCounter = null;

TestCase('CounterTest', {
    setUp: function() {
        defaultCounter = new Counter();
        initializedCounter = new Counter(1);
    },

    testInitialValue: function() {
        assertEquals('defaultCounter initial value should be 0', 0, defaultCounter.value());
        assertEquals('initializedCounter initial value should be one given to the constructor', 1, initializedCounter.value());
    },

    testIncrement: function() {
        defaultCounter.increment();
        initializedCounter.increment();    
        assertEquals('should increment defaultCounter by 1', 1, defaultCounter.value());
        assertEquals('should increment initializedCounter by 1', 2, initializedCounter.value());
    },

    testDecrement: function() {
        defaultCounter.decrement();
        initializedCounter.decrement();    
        assertEquals('should not decrement defaultCounter below its initial state', 0, defaultCounter.value());
        assertEquals('should not decrement initializedCounter below its initial state', 1, initializedCounter.value());
        
        defaultCounter.increment();
        initializedCounter.increment();  
        defaultCounter.decrement();
        initializedCounter.decrement();  
        assertEquals('should decrement defaultCounter by 1', 0, defaultCounter.value());
        assertEquals('should decrement initializedCounter by 1', 1, initializedCounter.value());
    },

    testReset: function() {
        defaultCounter.reset();
        initializedCounter.reset();
        
        assertEquals('should set defaultCounter to its initial state', 0, defaultCounter.value());
        assertEquals('should set initializedCounter to its initial state', 1, initializedCounter.value());
    }
});
