// Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/ 


function sumAll(arr) {
  // Create an array with all the numbers in the range given
  var list [];
  var max = Math.max(...arr);
  var min = Math.min(...arr); 
  for (var i = min; i <= max; i++){
    list.push(i); 
  }

  // Find the sum of all the numbers in the list array
  var total = list.reduce(function(a,b) {
    return a + b;
  }); 
  return total;
} 

sumAll([1, 4]);


// Test Cases:
sumAll([1, 4]) // => 10.
sumAll([4, 1]) // => 10.
sumAll([5, 10]) // => 45.
sumAll([10, 5]) // => 45.