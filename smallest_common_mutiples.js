// SMALLEST COMMON MULTIPLE

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/


function smallestCommons(arr) {
 
  // Create an array to store the range 
  var range = [];
  var max = Math.max(arr[0], arr[1]);  // max = 5
  var min = Math.min(arr[0], arr[1]);  // min = 1
  
  for (var i = max; i >= min; i--) {
      range.push(i);
  }
  
  // Euclidean Algorithm to find GCD (greatest common denominator)
  function gcd(a, b) {
    var temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
  }

  // Function to find LCM for two values
  function lcm(a, b) {
      return (Math.abs(a * b) / gcd(a, b));
  }

  // Apply LCM function to the range
  return range.reduce(function(a, b) {
        return lcm(a, b);
  });


}



// TEST CASES
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.



