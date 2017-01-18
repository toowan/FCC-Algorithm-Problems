// SEEK AND DESTROY

/* 

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/ 



// Using argument objects and .filter() method

function destroyer(arr) {
  // Remove all the values
  return arr;
}





// Test Cases:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // => [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // => [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // => [1].
destroyer([2, 3, 2, 3], 2, 3) // => [].
destroyer(["tree", "hamburger", 53], "tree", 53) // => ["hamburger"].