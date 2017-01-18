// MUTATIONS

/* 

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

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

