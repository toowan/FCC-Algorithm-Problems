// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.


function palindrome(str) {
  
  // disregard case  
  str = str.toLowerCase(); 
  
  // remove all non-alphanumeric characters 
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[(str.length-1)-i]) {
      return false; 
    }
  }
  
  return true;
}



// TEST CASE 

palindrome("eye");     					 // => true
palindrome("_eye");     				 // => false
palindrome("race car"); 				 // => true
palindrome("0_0 (: /-\ :) 0-0")          // => true
palindrome("five|\_/|four")              // => false