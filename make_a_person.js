// MAKE A PERSON

/*

Fill in the object constructor with the following methods below:

  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.


*/

var Person = function(firstAndLast) {
    var fullName = firstAndLast; // 'Bob Ross'
  
    this.getFirstName = function() {
      return fullName.split(" ")[0]; 
    }; // Bob
  
    this.getLastName = function() {
      return fullName.split(" ")[1]; 
    }; // Ross
    
    this.getFullName = function() {
      return fullName; 
    }; // Bob Ross 
  
    this.setFirstName = function(first) {
      fullName = first + " " + fullName.split(" ")[1]; 
    }; // 
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast; 
    };
  
};

// Test Cases

var bob = new Person('Bob Ross'); 
bob.getFirstName(); // Bob
bob.getLastName(); // Ross
bob.getFullName(); // Bob Ross
bob.setFirstName("Haskell"); // Haskell Ross
bob.setLastName("Curry"); // Haskell Curry
bob.setFullName("Haskell Curry"); // Haskell Curry
Object.keys(bob); // ["getFirstName", "getLastName", "getFullName", "setFirstName", "setLastName", "setFullName"]
Object.keys(bob).length; // 6



​