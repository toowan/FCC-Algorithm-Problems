// PAIRWISE 

/*

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index 0 1 2 3 4
Value 7 9 11  13  15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6


*/


function pairwise(arr, arg) {
  var sumPair = [];

  // Store all pairs of indices whose sum equal arg (no repeat of the same indices)
  for (var i1 = 0; i1 < arr.length; i1++) {
    for (var i2 = i1 + 1; i2 < arr.length; i2++) {
      if (arr[i1] + arr[i2] === arg && sumPair.indexOf(i1) === -1 && sumPair.indexOf(i2) === -1) {
        sumPair.push(i1, i2);
      }
    }
  }
  
  // Find the sum of the indices
  var sum = sumPair.reduce(function (acc, curr) {
    return acc + curr; 
  }, 0);

  return sum;
}

// Test Cases

pairwise([1, 4, 2, 3, 0, 5], 7) // 11.
pairwise([1, 3, 2, 4], 4) // 1.
pairwise([1, 1, 1], 2) // 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // 10.
pairwise([], 100) // 0.
​