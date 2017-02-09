// MISSING LETTERS
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
  // Split string into array 
  var dnaArray = str.split('');    // ["A", "T", "C", "G", "A"]
  
  // Outer array to store matched pairs at output
  var dnaStrand = []; 
  
  // Store nucleotide pairings in a hash
  var nucPairings = {A:'T', T:'A', C:'G', G:'C'};

  // Loop through given array to find corresponding nucleotide for each
  for (var i = 0; i < dnaArray.length; i++) {
    var nucMatch = nucPairings[dnaArray[i]];   // "T" 

    // Store the nucleotide and its match their own subarray
    var subArrayPair = []; 
    subArrayPair.push(dnaArray[i]); 
    subArrayPair.push(nucMatch);    // ["T", "A"]
    
    // Push all subarray pairs into outer array.  
    dnaStrand.push(subArrayPair);  // [["T", "A"]]
  }
  
  
  return dnaStrand;
}



// TEST CASES
pairElement("ATCGA") // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
