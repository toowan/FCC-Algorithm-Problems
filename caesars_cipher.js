// CAESAR CIPHER

/* 

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/ 


// Using .charCodeAt() and String.fromCharCode().  

function rot13(str) { 

  var decodedString = []; 

  for (var i = 0; i < str.length; i++) {
    // If characters are outside of the alphabet, push into new array as is without decoding. 
    if ((str.charCodeAt(i) < 65) || (str.charCodeAt(i) > 90)) {
      decodedString.push(str[i]); 
    } 
    // If characters are in the second half of the alphabet
    else if (str.charCodeAt(i) > 77) {
      decodedString.push(String.fromCharCode(str.charCodeAt(i) - 13)); 
    }
    // If characters are in the first half of the alphabet
    else {
      decodedString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  
  // => ["F","R","E","E"," ","C","O","D","E"," ","C","A","M","P"]

  // Join all characters in array together.  
  return decodedString.join('');   
}




// Test Cases:
rot13("SERR PBQR PNZC") // => "FREE CODE CAMP"
rot13("SERR CVMMN!") // =>  "FREE PIZZA!"
rot13("SERR YBIR?") // =>  "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // =>  "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
