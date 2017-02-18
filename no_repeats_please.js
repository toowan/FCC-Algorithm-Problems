// NO REPEATS PLEASE

/*

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab // 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


*/


function permAlone(str) {
  
  // Store string of letters in an array
  var arr = str.split(''); 

  // Store number of permutations without repeat
  var result = 0; 

  // Regex for repeating characters
  var regex = /(.)\1+/; 

  // Helper function to swap the letters in the array
  function swap(a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp; 
  }

  // Heap's Algorithm to generate the permutations and store the non-repeated ones
  function generate(n, arr) {
    // If there's only one element, output the array
    if (n === 1) {
      // If there's no repeated characters, increment result
      if(!regex.test(arr.join(''))){
      result++;
      }
    } 

    for (var i = 0; i < n; i++){
        generate(n-1, arr); 

        // If n is even
        if(n % 2 === 0) {
          swap (i, n-1);
        } else {
          swap (0, n-1);
        }
    }
  }

  generate(arr.length, arr);
  return result; 


}


// TEST CASES
permAlone("aab") // a number.
permAlone("aab") // 2.
permAlone("aaa") // 0.
permAlone("aabb") // 8.
permAlone("abcdefa") // 3600.
permAlone("abfdefa") // 2640.
permAlone("zzzzzzzz") // 0.
permAlone("a") // 1.
permAlone("aaab") // 0.
permAlone("aaabb") // 12.