// FINDERS KEEPER

/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

*/

// Using FOR loop
function findElement(arr, func) {  // arr = [1, 3, 5, 8, 9, 10]
  // num is undefined by default
  var num;
  
  // Loop through array and use the function to check if current num returns true. 
  for (var i = 0; i < arr.length; i++){    
    if (func(arr[i]))  {  
      num = arr[i];  // store this inside if statement to avoid infinite loop
      return num; 
    }
  }
  
  // Otherwise, return num as undefined
  return num;
  
}


// Using .filter()
function findElement(arr, func) {
  // Create new array with items that return true for func.
  filterArr = arr.filter(func); 

  // Return first element  of that array
  return filterArr[0]; 
}



// TEST CASES
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // undefined.



