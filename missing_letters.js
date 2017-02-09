// MISSING LETTERS
/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/



function fearNotLetter(str) {   // "abce"
  
  var diff, missingLetter; 
  
  // Convert each character to its unicode and find the difference between two adjacent numbers
  for (var i = 1; i < str.length; i++) {   // "97" "98" "99" "101" 
    diff = str.charCodeAt(i) - str.charCodeAt(i-1);   // 101-99 = 2 
    
    // If difference between two numbers is greater than 1, find the missing unicode and convert it to letter. 
    if (diff > 1)   {
      var missingLetter = String.fromCharCode(str.charCodeAt(i) - 1);  // String.fromCharCode(101 - 1) = "d"
      return missingLetter;
    } 
  }
  
  return undefined;  
}



// TEST CASES
fearNotLetter("abce") // "d".
fearNotLetter("abcdefghjklmno") // "i".
fearNotLetter("bcd") // undefined.
fearNotLetter("yz") // undefined.