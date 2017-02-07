// Diff Two Arrays

/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/ 

// USING indexOf Method

function diffArray(arr1, arr2) {
  
	var newArr = [];
    
    // Push all unique items in arr1 into newArr. 
	for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
		
	}

  	// Push all unique items in arr2 into newArr. 
	for (var j = 0; j < arr2.length; j++)  {
      if (arr1.indexOf(arr2[j]) === -1) {
        newArr.push(arr2[j]);
      }
	}
  	
    
  	// Return new array
    return newArr; 

}


// USING HASH 

function diffArray(arr1, arr2) {
	// Combine both arrays into one
	var arr3 = arr1.concat(arr2);  
	var counts = {};
    var newArr = []; 

    // Find the count for each item in the array
	for (var i = 0; i < arr3.length; i++) {
		var item = arr3[i]; 
		counts[item] = (counts[item] + 1) || 1; 
	}

  	// Push all items with a count of 1 into a new array
	for (var key in counts) {
		if (counts[key] === 1) {
			newArr.push(key); 
		}
	}
  	
  	// Return new array
    return newArr; 

}

// This returns all integer keys wrapped in quotes (ie. ['4', 'piglet']) because that's how hashes in JS work.  



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Test Cases:

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // => ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // => ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // => [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] // => [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] // => ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] // => ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] // => [1, "calf", 3, "piglet", 7, "filly"].
