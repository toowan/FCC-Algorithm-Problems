// FALSY BOUNCER

/* 

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/ 




// Using .indexOf() and .toLowerCase() methods


function mutation(arr) {      
  // Iterate through the second element of the array to check if all characters are present in first element                       
  for (var i = 0; i < arr[1].length; i++) {           
    // If a character in the second element does not exist in the first element (-1), return false
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase(), 0) === -1) {    
      return false; 
    }   
  }
  // Otherwise, return true. Put this outside the FOR loop so it can check all characters.
  return true; 
}




// Test Cases:
mutation(["hello", "hey"]) // => false.
mutation(["hello", "Hello"]) // =>  true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // =>  true.
mutation(["Mary", "Army"]) // =>  true.
mutation(["Mary", "Aarmy"]) // =>  true.
mutation(["Alien", "line"]) // =>  true.
mutation(["floor", "for"]) // =>  true.
mutation(["hello", "neo"]) // =>  false.
mutation(["voodoo", "no"]) // =>  false.

