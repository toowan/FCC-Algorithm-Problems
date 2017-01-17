// SLASHER FLICK 

/* Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index. */ 


// Using .splice method (array.splice(start, deleteCount, item1, item2, ...))

function slasher(arr, howMany) {
  arr.splice(0, howMany); 
  return arr;
}



// Test Cases:
slasher([1, 2, 3], 2) // => [3].
slasher([1, 2, 3], 0) // => [1, 2, 3].
slasher([1, 2, 3], 9) // => [].
slasher([1, 2, 3], 4) // => [].
slasher(["burgers", "fries", "shake"], 1) // => ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) // => ["cheese", 4].
