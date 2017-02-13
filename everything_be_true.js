// EVERYTHING BE TRUE

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/


// Using Loops
function truthCheck(collection, pre) {
  var counter = 0; 
  
  // Iterate through each item in the collection
  for (var key in collection) {
    // If key exists and its value is truthy (not NaN, undefined, 0, null or "")
    if (collection[key].hasOwnProperty(pre) && Boolean(collection[key][pre])) {
      counter++;  
    }
  }
  
  // If all cases in collection passed, return true.   
  if (counter === collection.length) {
    return true;
  }
  return false;
    
}


// Using .every() and callback function
function truthCheck(collection, pre) {
  
  // Helper function to check if key exists and its value is truthy
  function isTruth(key) {
     if (key.hasOwnProperty(pre) && Boolean(key[pre])) {
       return true; 
     }   
  }
  
  // Check all items in collection
  if (collection.every(isTruth)) {
    return true; 
  }
  return false; 
    
}



// TEST CASES
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") // false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") // true
truthCheck([{"single": "yes"}], "single") // true
truthCheck([{"single": ""}, {"single": "double"}], "single") // false
truthCheck([{"single": "double"}, {"single": undefined}], "single") // false
truthCheck([{"single": "double"}, {"single": NaN}], "single") // false

// Check if key exists
// to see to see if all boolean values are not false. 