// Return the length of the longest word in the provided sentence. 
// Your response should be a number.



function findLongestWord(str) {
  
  // split string into an array of strings
  str = str.split(' ');
  
  // If length of current word is greater than longestWord, replace longestWord with current word.  
  var longestWord = 0; 
  for (var i = 0; i < str.length; i++) { 
    if (str[i].length > longestWord) {
      longestWord = str[i].length; 
    }
  }
 
  return longestWord; 
  
}


// TEST CASES

findLongestWord("The quick brown fox jumped over the lazy dog");   // => 6




// 'reduce' Method: 

function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');

  // Step 2. Use the reduce method
  var longestWord = strSplit.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  }, "");
  
  /* Reduce process
  currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
  "The"             ""                  3                     0                              yes                          "The"
  "quick"           "The"               5                     3                              yes                         "quick"
  "brown"           "quick"             5                     5                              no                          "quick"
  "fox"             "quick"             3                     5                              no                          "quick"
  "jumped"          "quick"             6                     5                              yes                         "jumped"
  "over"            "jumped"            4                     6                              no                          "jumped"
  "the"             "jumped"            3                     6                              no                          "jumped"
  "lazy"            "jumped"            4                     6                              no                          "jumped"
  "dog"             "jumped"            3                     6                              no                          "jumped"
  */
  

  return longestWord.length;
}

 
 // 'sort' Method:

 function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');
  
  // Step 2. Sort the elements in the array from biggest to smallest
  var longestWord = strSplit.sort(function(a, b) { 
    return b.length - a.length;
  });
  /* Sorting process
    a           b            b.length     a.length     var longestWord
  "The"      "quick"            5            3         ["quick", "The"]
  "quick"    "brown"            5            5         ["quick", "brown", "The"]  
  "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
  "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
  "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
  "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
  "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
  "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
  */
  
  // Step 3. Return the length of the first element (because it's the biggest)
  return longestWord[0].length; 
