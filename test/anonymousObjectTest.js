TestCase('AnonymousObjectTest', {
    testMemberAccess: function() {
        assertEquals('should access a name like an attribute', 'Josefino Camurujipe', josefino.name);
        assertEquals('should access a name like an indexed value', 'Josefino Camurujipe', josefino['name']);
        
        assertEquals('should access a age like an attribute', 65, josefino.age);
        assertEquals('should access a age like an indexed value', 65, josefino['age']);
    },
    
    testSayHello: function() {
        assertEquals('should build the hello message correctly', 'Hello! My name is Josefino Camurujipe and I am 65 years old', josefino.sayHello());
    }
});
