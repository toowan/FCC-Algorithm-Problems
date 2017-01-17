// CHUNKY MONKEY

/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */ 


// Using .slice method with FOR loop

function chunkArrayInGroups(arr, size) {
  var newArray = []; 

  // Iterate through array by increment of size
  for (var i = 0; i < arr.length; i += size) {
    // If array's length is greater or equal to the size given, slice it by size and store in newArray
    if (arr.length >= size) {
      newArray.push(arr.slice(i, (i + size)));  
    // if array's length is less than size given, store whatever is left into newArray
    } else {
      newArray.push(arr); 
    }
  }
  
  return newArray;
}


// A simplified way of writing it with WHILE loop

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var i = 0;

  while (i < arr.length) {
    newArray.push(arr.slice(i, i+size));
    i += size;
  }
  return newArray;
}


// Test Cases:
chunkArrayInGroups(["a", "b", "c", "d"], 2) // => [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // => [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // =>  [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // =>  [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // =>  [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // =>  [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // =>  [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
