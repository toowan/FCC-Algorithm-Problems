// Repeat A String

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// Using .repeat method
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    return str.repeat(num); 
  } else {
    return ""; 
  }
}

// Test Cases:
repeatStringNumTimes("abc", 3) // => "abcabcabc"
repeatStringNumTimes("*", 3) // => "***"
repeatStringNumTimes("abc", 4) // => "abcabcabcabc" 
repeatStringNumTimes("abc", -2) // => ""