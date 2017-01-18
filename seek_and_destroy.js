// SEEK AND DESTROY

/* 

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/ 


// Using .splice, .indexOf, and .filter
function destroyer(arr) {                             // => arr = [1, 2, 3, 1, 2, 3], 2, 3  =>  [1, 2, 3, 1, 2, 3]
  // Convert arguments into a full Array
  var args = Array.prototype.slice.call(arguments);   // => args = [[1, 2, 3, 1, 2, 3], 2, 3]

  // Remove the first argument (initial array to be compared against)
  args.splice(0, 1);                                              // => args = [2, 3]

  // Write a function to return elements that don't exist in array (-1)
  function notInArray(element) {
    return args.indexOf(element) === -1;                          // => 1, 1
  }

  // Pass function into filter to return just elements that don't exist in initial array. 
  return arr.filter(notInArray);                                  // => arr = [1, 1] 
}




// Using FOR loop and .filter       
function destroyer(arr) {                              // => arr = [1, 2, 3, 1, 2, 3], 2, 3  =>  [1, 2, 3, 1, 2, 3]
  var args = Array.prototype.slice.call(arguments);    // => args = [[1, 2, 3, 1, 2, 3], 2, 3]

  // If the value at the current index for initial array and arg array are the same, remove it from arr. 
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];                                // => arr = [1, null, null, 1, null, null]
      }
    }
  }
  // Removes the boolean values from arr
  return arr.filter(Boolean);
}

/* Notes:
- arr is only taking into account it's first argument as an array, ignoring the rest.  

*/


// Test Cases:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // => [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // => [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // => [1].
destroyer([2, 3, 2, 3], 2, 3) // => [].
destroyer(["tree", "hamburger", 53], "tree", 53) // => ["hamburger"].