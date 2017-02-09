// SORTED UNION
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/



function uniteUnique(arr) {   
  
  // Create array to store output
  var newArray = []; 
  
  // Loop through the arguments first
  for (var i = 0; i < arguments.length; i++) {
    var arrayArg = arguments[i];    // arguments[0] = [1, 3, 2]
    
    // Loop through each argument array
    for (var j = 0; j < arrayArg.length; j++) {
      // Set current value
      var uniqueValue = arrayArg[j];  // arrayArg[0] = 1
      
      // If current value does not already exist in newArray, push it in. 
      if (newArray.indexOf(uniqueValue) === -1) {
        newArray.push(uniqueValue);   // [1]
      }
    }

  }
  return newArray;  // [1, 3, 2, 5, 4]
}



// TEST CASES
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) // [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) // [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // [1, 2, 3, 5, 4, 6, 7, 8].