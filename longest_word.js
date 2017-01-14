// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


// Using .map and .replace method:

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  
  // Step 2. Split the string into an array of strings
  str = str.split(' '); 
         
  // Step 3. Map over the array
  str = str.map(function(word) {
    return word.replace(word[0], word[0].toUpperCase()); 
    // => "little".replace("l", "L");
});

 // Step 4. Return the output
 return str.join(' '); 
}




// Using .map and .slice method:

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  
  // Step 2. Split the string into an array of strings
  str = str.split(' '); 
         
  // Step 3. Map over the array
  str = str.map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));  
    // "little".charAt(0).toUpperCase() + "little".slice(1) =>  "L"  + "ittle";

});

 // Step 4. Return the output
 return str.join(' '); 
}



// Using FOR loop and .slice method:

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  
  // Step 2. Split the string into an array of strings
  str = str.split(' '); 
         
  // Step 3. Iterate over the array with a FOR loop
  for (var i = 0, i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + word.slice(1);  
    // "little".charAt(0).toUpperCase() + "little".slice(1) =>  "L"  + "ittle";
}

 // Step 4. Return the output
 return str.join(' '); 
}





// TEST CASES:

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt"); 
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); 