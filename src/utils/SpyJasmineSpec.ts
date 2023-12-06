describe("Example Of jasmine Spy using spyOn()", function() { 
  
    it('uses the dictionary to say "hello world"', function() { 
       var dictionary = new Dictionary; 
       var person = new Person; 
         
       spyOn(dictionary, "hello");  // replace hello function with a spy 
       spyOn(dictionary, "world");  // replace world function with another spy 
         
       person.sayHelloWorld(dictionary);
       expect(dictionary.hello).toHaveBeenCalled();  
       // not possible without first spy 
   
       expect(dictionary.world).toHaveBeenCalled();  
       // not possible withoutsecond spy 
    }); 
 });