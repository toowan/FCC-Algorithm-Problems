// Largest of Four

// Using FOR loop and Math.max()
function largestOfFour(arr) {

  var maxArray = [];
  for (var i = 0; i < arr.length; i++) {
      // Get max value of each subarray and store in new array.
      var maxValue = Math.max.apply(Math, arr[i]);
      maxArray.push(maxValue);
  }
  return maxArray;
}


// Using .map and Math.max()
function largestOfFour(mainArray) {
  // Map over the main arrays
  return mainArray.map(function(subArray) {
    // Return the largest value of each subarray.
    return Math.max.apply(null, subArray);
  });
}


// Using FOR loop to iterate though outer and inner arrays.
function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
 }
 return largestNumber;
}



// TEST CASES

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // => [9, 35, 97, 1000000]

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // => [27,5,39,1001]
