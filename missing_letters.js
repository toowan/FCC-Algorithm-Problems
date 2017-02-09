// MISSING LETTERS
/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/



function fearNotLetter(str) {   // "abce"
  
  // convert each character to its unicode and find the difference between two adjacent numbers
  for (var i = 0; i < str.length; i++) {   // "97" "98" "99" "101" 
    var diff = str.charCodeAt(i + 1) - str.charCodeAt(i);   // 101-99 = 2 
    
    // If difference between two numbers is greater than 1, find the missing unicode and convert it to letter. 
    if (diff > 1)   {   
      var missingLetter = String.fromCharCode(str.charCodeAt(i) +  1);  // String.fromCharCode(99 + 1) = "d"
      return missingLetter;
    } 
  }
  
}



// TEST CASES
fearNotLetter("abce") // "d".
fearNotLetter("abcdefghjklmno") // "i".
fearNotLetter("bcd") // undefined.
fearNotLetter("yz") // undefined.