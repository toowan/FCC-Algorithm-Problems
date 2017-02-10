// DROP IT

/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/

// Using FOR loop and .shift()
function dropElements(arr, func) {
  // Drop them elements.
  
  // Remove all first fail elements until arr[i] evaluates to true. 
  for (var i = 0; i < arr.length; i++) {
    while (func(arr[i]) === false) {
      arr.shift(); 
    }   
    return arr; // Return 'shifted' array
  }

  return arr;  // Else, return unmodified array
}



// TEST CASES
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) // [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [3, 9, 2].


