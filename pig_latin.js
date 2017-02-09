// PIG LATIN
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/




function translatePigLatin(str) {
  
  // Convert string into array of letters
  var strArray = str.split ('');
  var vowels = ['a', 'e', 'i', 'o', 'u']; 

   
  // If first index is a vowel, add 'way' to the end
   if (vowels.indexOf(strArray[0]) !== -1) {
      strArray.push('way');
      return strArray.join('');  
   }

  
  // While the first letter is a consonant, add it to the end of the array and extract array starting at index 1.    
   while (vowels.indexOf(strArray[0]) === -1) {
      strArray.push(strArray[0]);
      strArray = strArray.slice(1); 
   }
   return (strArray.join('') + 'ay'); 
  
}



// TEST CASES
translatePigLatin("california")// "aliforniacay".
translatePigLatin("paragraphs") // "aragraphspay".
translatePigLatin("glove") // "oveglay".
translatePigLatin("algorithm") // "algorithmway".
translatePigLatin("eight") // "eightway".
