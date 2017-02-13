// ARGUMENTS OPTIONAL

/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) // 5, and addTogether(2) // a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.


*/


function addTogether() {

  // Store arguments in an array
  var args = Array.from(arguments);  // [2, 3]

  // Return undefined if not ALL arguments are integers
  if(!args.every(function(arg) {
    return typeof arg === 'number';
  })) {
    return undefined;
  }
  

  // If there are two arguments, return their sum. 
  if (args.length === 2){
    return args[0] + args[1]; 
  }
  // If there are one argument, return a function that adds another number to it
  else {
    // Store first argument
    var x = args[0];
    // Return a function that adds another number to x.
    var addOneMore = function (y) {
      return addTogether(x, y);  // recursion
    };
    return addOneMore; 
  }
  
}



// TEST CASES
addTogether(2, 3) // 5.
addTogether(2)(3) // 5.
addTogether("http://bit.ly/IqT6zt") // undefined.
addTogether(2, "3") // undefined.
addTogether(2)([3]) // undefined.


