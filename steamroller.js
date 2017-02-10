// STEAMROLLER

/*
Flatten a nested array. You must account for varying levels of nesting.
*/



function steamroller(arr) {
var flatArray = [];
  
  // Helper function to check and flatten any element that is an array
  function flatten(el) {
    if (Array.isArray(el)) {
      for (i = 0; i < el.length; i++) {
          flatten(el[i]);    // recursion* 
      }
    } else {
      flatArray.push(el); 
    }
  }

  // Invoke helper function on all items in the array
  for (var j = 0; j < arr.length; j++) {
    flatten(arr[j]);
    return flatArray; 
  }

}


// *Recursion: If the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.

// TEST CASES
steamrollArray([[["a"]], [["b"]]]) // ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) // [1, {}, 3, 4].